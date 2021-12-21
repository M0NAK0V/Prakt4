import * as THREE from '../../three.module.js';
import Stats from '../../stats.module.js';
THREE.Cache.enabled = true;
import { MTLLoader } from "../../MTLLoader.js";
import { OBJLoader2 } from "../../OBJLoader2.js";
import { MtlObjBridge } from "../../obj2/bridge/MtlObjBridge.js";
import { OrbitControls } from '../../OrbitControls.js';

let camera, scene, renderer, stats, container, anim;

export function Init()
{
	console.log('Init');
}

export function init() {
	anim = true;
	container = document.createElement( 'div' );
	document.body.appendChild( container );
	container.setAttribute('style',`position: absolute;
	top: 0;
	left: 0;`);
	let rat = window.innerWidth / window.innerHeight;
	camera = new THREE.PerspectiveCamera( 75, rat, 0.1, 1000 );
	camera.position.set( 0, 10, 10 );
	scene = new THREE.Scene();
	stats = new Stats();
	stats.dom.setAttribute('style',`position: absolute;
	top: 70px;
	left: 0;`);
	container.appendChild( stats.dom );
	const ambientLight = new THREE.AmbientLight( 0xcccccc, 0.4 );
	camera.add( ambientLight );
	const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
	directionalLight.position.set( 0, 50, 0 );
	camera.add( directionalLight );
	scene.add( camera );
	const modelName = 'kit';
	const objLoader2 = new OBJLoader2();
	const callbackOnLoad = function ( object3d ) {
		object3d.position.x = 0;
		object3d.position.y = 0;
		object3d.position.z = 0;
		scene.add( object3d );
		console.log( 'Loading complete: ' + modelName );
	};
	const onLoadMtl = function ( mtlParseResult ) {
		objLoader2.setModelName( modelName );
		objLoader2.setLogging( true, true );
		objLoader2.addMaterials( MtlObjBridge.addMaterialsFromMtlLoader( mtlParseResult ), true );
		objLoader2.load( './js/3d/models/CPU/CPU.obj', callbackOnLoad, null, null, null );
	};
	const mtlLoader = new MTLLoader();
	mtlLoader.load( './js/3d/models/CPU/CPU.mtl', onLoadMtl );
	renderer = new THREE.WebGLRenderer({ alpha: true });
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	container.appendChild( renderer.domElement );
	const controls = new OrbitControls( camera, renderer.domElement);
	controls.minDistance = 50 * 2/rat;
	controls.maxDistance = 50 * 2/rat;
	controls.update();
	window.addEventListener( 'resize', onWindowResize, false );
	animate();
};

export function destroy(){
	window.removeEventListener( 'resize', onWindowResize, false );
	anim = false;
	document.body.removeChild(container);
	scene = null;
	renderer = null;
	camera = null;
	stats = null;
	anim = null;
	container = null;
};

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
}

function animate() {
	if(!anim)
		return;
	requestAnimationFrame( animate );
	render();
	stats.update();
}

function render() {
	camera.lookAt( scene.position );
	renderer.render( scene, camera );
}