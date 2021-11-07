import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plugin } from 'src/app/model/plugin';
import { PluginService } from 'src/app/service/plugin.service';

@Component({
    selector: 'app-edit-plugin',
    templateUrl: './edit-plugin.component.html',
    styleUrls: ['./edit-plugin.component.css']
})
export class EditPluginComponent implements OnInit {

    plugin: Plugin;
    textInfo:string = "";

    constructor(private router: Router, private service: PluginService) {
        this.plugin = new Plugin();
    }

    ngOnInit(): void {
        this.getPlugin();
        this.eventModal();
    }

    getPlugin(): void {
        let idP: string = localStorage.getItem('idPlugin') ?? '';
        this.service.getById(idP)
        .subscribe(data => {
            this.plugin = data;
        });
    }

    onSubmit(): void {
        this.service.update(this.plugin)
        .subscribe(data => {
            this.showInfo('Plugin actualizado');
        });
    }

    backList(): void {
        this.router.navigate(['/plugin/list']);
    }

    private showInfo(info:string){
        this.textInfo = info;
        document.getElementById("btnModalInfo")?.click();
    }

    private eventModal(){
        document.getElementById('modalInfo')?.addEventListener('hidden.bs.modal', ()=> {
            this.backList();
        });
    }

}
