Events.on(ClientLoadEvent, () => {
    const nati = new Planet("nati", Planets.sun, 3, 0.9);
    nati.generator = new SerpuloPlanetGenerator();
    nati.mesh = new HexMesh(nati, 2);
    nati.orbitRadius = 10.75;
    nati.orbitTime = 1075
    nati.rotateTime = 360;
    nati.bloom = false;
    nati.radius = 0.57;
    nati.accessible = true;
    nati.hasAtmosphere = true;
    nati.atmosphereColor = Color.valueOf("21169e");
    nati.atmosphereRadIn = 0.52;
    nati.atmosphereRadOut = 0.525;
    nati.localizedName = "natai";
});
