import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plugin } from 'src/app/model/plugin';
import { PluginsUsuario } from 'src/app/model/pluginsUsuario';
import { PluginService } from 'src/app/service/plugin.service';
import { PluginsUserService } from 'src/app/service/plugins-user.service';

@Component({
    selector: 'app-all-plugins',
    templateUrl: './all-plugins.component.html',
    styleUrls: ['./all-plugins.component.css']
})
export class AllPluginsComponent implements OnInit {

    plugins: Plugin[];
    textInfo: string = '';
    pluginsU: PluginsUsuario;
    pluginsSeguidos: PluginsUsuario[];

    constructor(private router: Router, private service: PluginService, private pluginsUService: PluginsUserService) {
        this.plugins = new Array();
        this.pluginsU = new PluginsUsuario();
        this.pluginsSeguidos = new Array();
    }

    ngOnInit(): void {
        this.eventModal();
        this.service.unFollowPlugin(localStorage.getItem('user')??'')
            .subscribe(data => {
                this.plugins = data;
            });

        // this.pluginsUService.getAllByUser(localStorage.getItem('user')??'')
        //     .subscribe(data => {
        //         this.pluginsSeguidos = data;
        //         this.pluginsSeguidos.forEach(p => {
        //             this.plugins = this.plugins.filter(pp => pp.id!=p.plugin.id);
        //         });
        //     });
    }

    verPosts(plugin: Plugin) {
        localStorage.setItem('idPlugin', plugin.id.toString());
        this.router.navigate(['/user/allPosts']);
    }

    verDesc(plugin: Plugin) {
        let div: HTMLDivElement = document.querySelector('#contenido') ?? new HTMLDivElement;
        div.innerHTML = plugin.descripcion;
    }

    seguir(plugin: Plugin) {
        let username: string = localStorage.getItem('user') ?? '';
        this.pluginsU.plugin.id = plugin.id;
        this.pluginsU.usuario.username = username;
        this.pluginsUService.create(this.pluginsU)
            .subscribe(data => {
                this.showInfo(`Ahora sigues los posts del plugin ${plugin.nombre}`);
            });

    }

    back() {
        this.router.navigate(['/user/misPlugins']);
    }

    private eventModal() {
        document.getElementById('modalInfo')?.addEventListener('hidden.bs.modal', () => {
            this.back();
        });
    }

    private showInfo(info:string){
        this.textInfo = info;
        document.getElementById("btnModalInfo")?.click();
    }

}
