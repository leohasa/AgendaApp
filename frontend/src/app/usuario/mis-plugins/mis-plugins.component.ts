import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PluginsUsuario } from 'src/app/model/pluginsUsuario';
import { PluginsUserService } from 'src/app/service/plugins-user.service';

@Component({
    selector: 'app-mis-plugins',
    templateUrl: './mis-plugins.component.html',
    styleUrls: ['./mis-plugins.component.css']
})
export class MisPluginsComponent implements OnInit {

    plugins: PluginsUsuario[];
    textInfo: string = '';

    constructor(private router: Router, private service: PluginsUserService) {
        this.plugins = new Array();
    }

    ngOnInit(): void {
        let username: string = localStorage.getItem('user') ?? '';
        this.service.getAllByUser(username)
            .subscribe(data  => {
                this.plugins = data;
            });
    }

    add() {
        this.router.navigate(['']);
    }

    delete(plugin: PluginsUsuario) {
        this.service.delete(plugin.id)
        .subscribe(data => {
            this.plugins = this.plugins.filter(p => p != plugin);
            this.showInfo('Eliminado de mis plugins');
        });
    }

    verPosts(pluginU: PluginsUsuario) {
        localStorage.setItem('idPlugin', pluginU.plugin.id.toString());
        this.router.navigate(['/post/list']);
    }

    verDesc(pluginU: PluginsUsuario) {
        let div: HTMLDivElement = document.querySelector('#contenido') ?? new HTMLDivElement;
        div.innerHTML = pluginU.plugin.descripcion;
    }

    private showInfo(info:string){
        this.textInfo = info;
        document.getElementById("btnModalInfo")?.click();
    }

}
