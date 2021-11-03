import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plugin } from 'src/app/model/plugin';
import { PluginService } from 'src/app/service/plugin.service';

@Component({
    selector: 'app-list-plugins',
    templateUrl: './list-plugins.component.html',
    styleUrls: ['./list-plugins.component.css']
})
export class ListPluginsComponent implements OnInit {

    plugins: Plugin[];
    textInfo: string = '';

    constructor(private router: Router, private service: PluginService) {
        this.plugins = new Array();
    }

    ngOnInit(): void {
        this.service.getAll()
            .subscribe(data => {
                this.plugins = data;
            });
    }

    add() {
        this.router.navigate(['/plugin/add']);
    }

    editar(plugin: Plugin) {
        localStorage.setItem('idPlugin', plugin.id.toString());
        this.router.navigate(['/plugin/edit']);
    }

    delete(plugin: Plugin) {
        this.service.delete(plugin.id)
        .subscribe(data => {
            this.plugins = this.plugins.filter(p => p != plugin);
            this.showInfo('Plugin eliminado');
        });
    }

    verPosts(plugin: Plugin) {
        localStorage.setItem('idPlugin', plugin.id.toString());
        this.router.navigate(['/post/list']);
    }

    private showInfo(info:string){
        this.textInfo = info;
        document.getElementById("btnModalInfo")?.click();
    }

}
