

			import * as THREE from './3d/three.module.js';

			import Stats from './3d/stats.module.js';
			
			THREE.Cache.enabled = false;

			import { MTLLoader } from "./3d/MTLLoader.js";
			import { OBJLoader2 } from "./3d/OBJLoader2.js";
			import { MtlObjBridge } from "./3d/obj2/bridge/MtlObjBridge.js";
			import { OrbitControls } from './3d/OrbitControls.js';

			let camera, scene, renderer, stats;

			let mouseX = 0, mouseY = 0;

			let windowHalfX = window.innerWidth / 2;
			let windowHalfY = window.innerHeight / 2;


			init();
			animate();


			function init() {

				const container = document.createElement( 'div' );
				document.body.appendChild( container );

				camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
				camera.position.set( 0, 10, 10 );

				// scene

				scene = new THREE.Scene();
				
				stats = new Stats();
				container.appendChild( stats.dom );

				const ambientLight = new THREE.AmbientLight( 0xcccccc, 0.4 );
				camera.add( ambientLight );

				const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
				directionalLight.position.set( 0, 50, 0 );
				camera.add( directionalLight );
				scene.add( camera );

				// model

				const onProgress = function ( xhr ) {

					if ( xhr.lengthComputable ) {

						const percentComplete = xhr.loaded / xhr.total * 100;
						console.log( Math.round( percentComplete, 2 ) + '% downloaded' );

					}

				};

				const onError = function () { };

				// comment in the following line and import TGALoader if your asset uses TGA textures

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
						objLoader2.load( 'js/3d/models/korp.obj', callbackOnLoad, null, null, null );

					};

					const mtlLoader = new MTLLoader();
					mtlLoader.load( 'js/3d/models/korp.mtl', onLoadMtl );

				//

				renderer = new THREE.WebGLRenderer({ alpha: true });
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				container.appendChild( renderer.domElement );
				
				const controls = new OrbitControls( camera, renderer.domElement);
				controls.minDistance = 10;
				controls.maxDistance = 10;
				controls.update();
				//

				window.addEventListener( 'resize', onWindowResize, false );

			}

			function onWindowResize() {

				windowHalfX = window.innerWidth / 2;
				windowHalfY = window.innerHeight / 2;

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}

			//

			function animate() {

				requestAnimationFrame( animate );
				render();
				
				stats.update();

			}

			function render() {

				camera.lookAt( scene.position );

				renderer.render( scene, camera );

			}

		