let scene, renderer, camera;
function init() 
{
    scene = new.THREE.Scene();
    camera = new.PerspectiveCamera(55, window.innerWidth/ window.
        innerHeight, 45, 30000);
        camera.position.set(-900, -200, -900);
            
            renderer = new THREE.WebGLRenderer({antialias: true});
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.body.appendChild(renderer.domElement);
            let controls = new THREE.OrbitControls(camera);
            controls.addEventListener('change', renderer);

            let materialArray = [];
            let texture_ft = new TextureLoader().load('/sky/2/arid2_ft.jpg')
            let texture_bk = new TextureLoader().load('/sky/2/arid2_bk.jpg')
            let texture_up = new TextureLoader().load('/sky/2/arid2_up.jpg')
            let texture_dn = new TextureLoader().load('/sky/2/arid2_dn.jpg')
            let texture_rt = new TextureLoader().load('/sky/2/arid2_rt.jpg')
            let texture_lf = new TextureLoader().load('/sky/2/arid2_lf.jpg')

            materialArray.push(new THREE.MeshBasicMaterial
                ( {map: texture_ft} ) );
            materialArray.push(new THREE.MeshBasicMaterial
                    ( {map: texture_bk} ) );
            materialArray.push(new THREE.MeshBasicMaterial
                        ( {map: texture_up} ) );
            materialArray.push(new THREE.MeshBasicMaterial
                            ( {map: texture_dn} ) );
            materialArray.push(new THREE.MeshBasicMaterial
                                ( {map: texture_rt} ) );
            materialArray.push(new THREE.MeshBasicMaterial
                                    ( {map: texture_lf} ) );

            for(let i= 0; i<6; i++)
                materialArray[i].side = THREE.BackSide;

        let skyboxGeo = new THREE.Boxgeometry(10000, 10000, 10000);
        let skybox = new THREE.Mesh( skyboxGeo,
            materialArray);
            scene.add(skybox);
            animation()
}

function animation() 
{
    renderer.render(scene, camera);
    requestAnimationFrame(animation)
}

init();
    
