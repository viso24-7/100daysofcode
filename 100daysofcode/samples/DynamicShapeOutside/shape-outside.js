class ShapeOutside extends React.Component {
	constructor(props) {
		super(props);
		let oldState = window.localStorage.getItem('samuel');
		if (oldState) {
			oldState = JSON.parse(oldState);
		} else {
			oldState =  {
				cx:161,
				cy:248,
				rx:272,
				ry:352,
				ax:330,
				ay:440
			}
		}
		this.state = oldState; 
	}

	update = () => {
		const state = {cx: this.refs.cx.value,cy: this.refs.cy.value,rx: this.refs.rx.value,ry: this.refs.ry.value,
		               ax: this.refs.ax.value,ay: this.refs.ay.value}
		this.setState(state)
		window.localStorage.setItem('samuel', JSON.stringify(state))
	}

	render() {
		const {cx,cy,rx,ry,ax,ay} = this.state;

		var css = "ellipse("+rx+"px "+ry+"px at "+cx+"px "+cy+"px)";
		var ellipse = <ellipse cx={cx} cy={cy} rx={rx} ry={ry} />
				var mask = <defs>
							<clipPath id="mask">
								<ellipse cx={cx} cy={cy} rx={rx-10} ry={ry-10} fill="white" />
							</clipPath>
						</defs>
		document.querySelector('.css').innerText = 'shape-outside: '+css+';';


		return (
			<div className="action" title="Drag to move ellipse. Shift+drag to change ellipse dimensione. CMD/Alt to change image position inside ellipse.">
			<svg width="2000" height="2000" style={{shapeOutside: css}}>
					{mask}
				{ellipse}
				<image clipPath="url(#mask)" xlinkHref="https://images-na.ssl-images-amazon.com/images/M/MV5BMjAwMDA5NDI4M15BMl5BanBnXkFtZTcwNjUzNTU0NA@@._V1_SY1000_CR0,0,1509,1000_AL_.jpg" x={this.state.cx-this.state.ax} y={this.state.cy-this.state.ay} height="1000" width="1000" />  	
            </svg>

				<div className="control">
				    <label title="Ellipse POSITION x">CX
					    <input type="range" ref="cx" min="-1000" max="1400" onChange={this.update} value={cx} />
					</label>
					<label title="Ellipse POSITION y">CY
					    <input type="range" ref="cy" min="-1000" max="1400" onChange={this.update} value={cy} />
					</label>
					<label title="Ellipse RADIUS width">RX
					      <input type="range" ref="rx" min="100" max="1400" onChange={this.update} value={rx} />
					</label>
					<label title="Ellipse RADIUS height">RY
					        <input type="range" ref="ry" min="100" max="1400" onChange={this.update} value={ry} />
					</label>
					<label title="Image placement X">aX
					      <input type="range" ref="ax" min="-1000" max="1000" onChange={this.update} value={ax} />
					</label>
					<label title="Image placement Y">aY
					   <input type="range" ref="ay" min="-1000" max="1000" onChange={this.update} value={ay} />
					</label>
				</div>
			</div>
		)
	}
}

window.shapeoutside = ReactDOM.render(<ShapeOutside />, document.querySelector('.app'));

// Yes you can work with React components from outside :-)
var startClick;
setTimeout(function() {
var svg = document.querySelector('svg');
var mm = function(evt) {
  if (evt.buttons) {
		svg.classList.add('move');
		if (evt.shiftKey || evt.metaKey || evt.altKey) {
			if (startClick) {
				svg.classList.add('resize');
				var dx = evt.clientX-startClick.clientX;
				var dy = evt.clientY-startClick.clientY;
				if (evt.shiftKey) {
					window.shapeoutside.refs.rx.value = parseInt(window.shapeoutside.refs.rx.value)+dx;
					window.shapeoutside.refs.ry.value = parseInt(window.shapeoutside.refs.ry.value)+dy;
				} else {
					window.shapeoutside.refs.ax.value = parseInt(window.shapeoutside.refs.ax.value)-dx*2;
					window.shapeoutside.refs.ay.value = parseInt(window.shapeoutside.refs.ay.value)-dy*2;
				}
				startClick = {
					clientX: evt.clientX,
					clientY: evt.clientY,
				}
			} else {
				startClick = {
					clientX: evt.clientX,
					clientY: evt.clientY,
				}
			}
		} else {
			window.shapeoutside.refs.cx.value = evt.clientX
			window.shapeoutside.refs.cy.value = evt.clientY
		}
		window.shapeoutside.update();
 	} else {
		svg.classList.remove('move');
		svg.classList.remove('resize');
	}
}
svg.addEventListener('mousemove', mm)
}, 1200)

