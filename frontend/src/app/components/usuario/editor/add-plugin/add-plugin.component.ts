import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plugin } from 'src/app/model/plugin';
import { PluginService } from 'src/app/service/plugin.service';

@Component({
    selector: 'app-add-plugin',
    templateUrl: './add-plugin.component.html',
    styleUrls: ['./add-plugin.component.css']
})
export class AddPluginComponent implements OnInit {

    plugin: Plugin;
    textInfo:string = "";

    constructor(private router: Router, private service: PluginService) {
        this.plugin = new Plugin();
    }

    ngOnInit(): void {
        this.eventModal();
    }

    onSubmit(): void {
        this.service.create(this.plugin)
        .subscribe(data => {
            this.showInfo('Plugin agregado');
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
