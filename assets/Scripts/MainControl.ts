import { _decorator, Component, director, easing, Node, tween, Vec2, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MainControl')
export class MainControl extends Component {
    @property(Node)
    icMagnifyingGlass : Node

    start() {
        tween(this.icMagnifyingGlass).to(0.5, {position : new Vec3(-35.3 , 44.75, 0) } , {easing : "bounceOut"}).start();
        this.schedule(function(){
            director.loadScene("Gameplay", function() {console.log("load gameplay success");})
        }, 2);                                      
    }
}


