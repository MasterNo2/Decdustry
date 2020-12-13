Events.on(ClientLoadEvent, () => {
    const nati = new Planet("nati", Planets.sun, 3, 0.9);
    nati.generator = new SerpuloPlanetGenerator();
    nati.mesh = new HexMesh(nati, 2);
    nati.orbitRadius = 4.75;
    nati.orbitTime = 1075
    nati.rotateTime = 360;
    nati.bloom = false;
    nati.radius = 0.57;
    nati.accessible = false;
    nati.hasAtmosphere = true;
    nati.atmosphereColor = Color.valueOf("9e1646");
    nati.atmosphereRadIn = 0.52;
    nati.atmosphereRadOut = 0.525;
    nati.localizedName = "natai";
});
