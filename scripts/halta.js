Events.on(ClientLoadEvent, () => {
    const halta = new Planet("halta", Planets.sun, 3, 1.8);
    halta.generator = new SerpuloPlanetGenerator();
    halta.mesh = new HexMesh(
        
      halta, 2;
        
      Color.valueOf("e9f2f0"),
      Color.valueOf("d5dbda"),
      Color.valueOf("bbc7c5"),
      Color.valueOf("cce0dd"),
      Color.valueOf("d0f5ef"),
      Color.valueOf("f5ffff")
    );
    halta.orbitRadius = 4.75;
    halta.orbitTime = 1075
    halta.rotateTime = 360;
    halta.bloom = false;
    halta.radius = 0.67;
    halta.accessible = true;
    halta.hasAtmosphere = false;
    halta.atmosphereColor = Color.valueOf("daf5f5");
    halta.atmosphereRadIn = 0.62;
    halta.atmosphereRadOut = 0.625;
    halta.localizedName = "Halta";
