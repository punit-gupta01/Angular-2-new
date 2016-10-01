import {Component} from '@angular/core';
import {model_name} from './sub-component';
import {localDataService} from './local-data.service';

@Component({
	selector: 'mysub-app',
	templateUrl: 'app/sub-component.component.html',
	styleUrls: ['app/sub-component.component.css']
})
export class subcomponentComponent{
	obj : model_name[];

	ageSum(){
		var sum=0;
		for(var i=0;i<this.obj.length;i++){
			sum+=this.obj[i].age;
		}
		return sum;
	}

	func_name(name){
		if(name.toLowerCase()=='punit')
		alert('Good choice!');
	}

	//constructor(private xyz : localDataService){}

	ngOnInit(){
		var localDataServiceInstance = new localDataService();
		localDataServiceInstance.getLocalData().subscribe( temp_var => this.obj = temp_var);
	}
}