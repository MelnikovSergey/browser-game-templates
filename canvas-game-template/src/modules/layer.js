export class Layer {
	constructor(container) {
		// Create new Canvas element
		this.canvas = document.createElement('canvas');
		// Get access to 2D drawing tools
		this.context = this.canvas.getContext('2d');
		// Put Canvas to Container
		container.appendChild(this.canvas);

		this.adjustingCanvasSize = this.adjustingCanvasSize.bind(this);
		this.adjustingCanvasSize();

		addEventListener('resize', this.adjustingCanvasSize);
	}

	// Adjusting Canvas size to the Container
	adjustingCanvasSize() {
		this.w = this.canvas.width = this.canvas.offsetWidth;
		this.h = this.canvas.height = this.canvas.offsetHeight;
	}
}