import { Vector2, Vector3, Object3D } from 'three';
import { MonoBehaviour } from '../components/MonoBehaviour';
import { GameObject } from './GameObject';

export class BaseEntity extends MonoBehaviour {

	public prefabName: string; // имя образца
	protected velocity: Vector2 = new Vector2();
	public idEntity: number = -1;
	protected components: MonoBehaviour[] = [];
	protected renderIndex = 0;

	constructor() {
		super();
		this.gameObject = this;
	}

	// добавить этот объект к родителю
	addToParent(parent: Object3D) {
		parent.add(this);
	}

	// удалить объект от родителя
	removeFromParent() {
		return super.removeFromParent();
	}

	// До добавления к родителю
	onBeforeAdd() {
	}

	// после добавления
	onAfterAdd() {

	}

	onBeforeRemove() {

	}

	setPosition(pos: Vector2 | Vector3) {
		if ('isVector2' in pos)
			this.position.set(pos.x, pos.y, this.position.z);
		else
			this.position.copy(pos);
	}

	setPositionXY(x: number, y: number) {
		this.position.set(x, y, this.position.z);
	}

	setPositionZ(z: number) {
		this.position.z = z;
	}

	getPosition() {
		return new Vector3(this.position.x, this.position.y, this.position.z);
	}

	get2dPosition() {
		return new Vector2(this.position.x, this.position.y);
	}

	get2dPositionAbs() {
		var wp = new Vector3();
		this.getWorldPosition(wp);
		return new Vector2(wp.x, wp.y);
	}

	setVelocity(v: Vector2) {
		this.velocity.copy(v);
	}

	getVelocity() {
		return this.velocity;
	}

	setVisible(val: boolean) {
		this.visible = val;
	}

	setRotationRad(angle: number) {
		this.rotation.z = angle;
	}

	setRotationDeg(angle: number) {
		this.rotation.z = angle / 180 * Math.PI;
	}

	getRotationRad() {
		return this.rotation.z;
	}

	getRotationDeg() {
		return this.rotation.z / Math.PI * 180;
	}
	

	setScale(scale: number) {
		this.scale.setScalar(scale);
	}

	setScaleXY(x: number, y: number) {
		this.scale.set(x, y, this.scale.z);
	}

	

	getRenderOrder() {
		return this.renderIndex;
	}

	setRenderOrder(index: number) {
		this.renderIndex = index;
		var z = index * 0.01 + 0.2;
		if (this.parent !== null) {
			var lp = new Vector3();
			var wp = new Vector3(0, 0, z);
			lp = this.parent.worldToLocal(wp);
			this.setPositionZ(lp.z);
		}
		else
			this.setPositionZ(z);
		this.updateMatrixWorld();
	}

	addComponent(cmp: MonoBehaviour) {
		cmp.onAddedComponent(this);
		this.components.push(cmp);
	}

	GetChildCount() {
		return this.children.length;
	}
	
	// получить дочерний элемент
	GetChild(index: number) {
		if (this.children.length == 0) {
			console.error("Нету дочерних элементов:", index);
			return this as GameObject;
		}
		if (this.children.length - 1 < index) {
			console.error("Нету индекса дочернего элемента:", index);
			return this as GameObject;
		}
		var ch = this.children[index];
		return ch as GameObject;
	}

	doUpdate(deltaTime: number) {

	}

	destroy() {

	}

}