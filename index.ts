import 'reflect-metadata/Reflect.js';
import { Container, injectable, inject } from "inversify";

@injectable()
class Katana {
	public hit() {
		return "cut!";
	}
}

@injectable()
class Shuriken {
	public throw() {
		return "hit!";
	}
}

@injectable()
class Ninja implements Ninja {

	private _katana: Katana;
	private _shuriken: Shuriken;

	public constructor(katana: Katana, shuriken: Shuriken) {
		this._katana = katana;
		this._shuriken = shuriken;
	}

	public fight() { return this._katana.hit(); };
	public sneak() { return this._shuriken.throw(); };

}

var container = new Container();
container.bind<Ninja>(Ninja).toSelf();
container.bind<Katana>(Katana).toSelf();
container.bind<Shuriken>(Shuriken).toSelf();

const ninja = container.get<Ninja>(Ninja);
console.log(ninja.fight());
console.log(ninja.sneak());
