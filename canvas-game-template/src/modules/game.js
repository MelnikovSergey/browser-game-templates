﻿import { Layer } from './layer.js'
import { Loop } from './loop.js'

class Game {
	constructor(container) {
		this.layer = new Layer(container);

		this.rect = {
			x: 0,
			y: 0,
			w: 25,
			h: 25,
			vx: 150,
			vy: 150
		}

		new Loop(this.update.bind(this), this.display.bind(this));
	}

	update(correction) {
		if(this.rect.x <=0 && this.rect.vx < 0 || this.rect.x + this.rect.w > this.layer.w && this.rect.vx > 0) {
			this.rect.vx = -this.rect.vx;
		}

		if(this.rect.y <=0 && this.rect.vy < 0 || this.rect.y + this.rect.h > this.layer.h && this.rect.vy > 0) {
			this.rect.vy = -this.rect.vy;
		}
		
		this.rect.x += this.rect.vx * correction;
		this.rect.y += this.rect.vy * correction;
	}
	
	display() {
		this.layer.context.clearRect(0, 0, this.layer.w, this.layer.h);
		this.layer.context.fillStyle = 'white';
		this.layer.context.fillRect(this.rect.x, this.rect.y, this.rect.w, this.rect.h);
	}
}

onload = () => {
	new Game(document.querySelector('body'));
}