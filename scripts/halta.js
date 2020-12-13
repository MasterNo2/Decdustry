Events.on(ClientLoadEvent, () => {
    const halta = new Planet("halta", Planets.sun, 3, 1.2;
    halta.generator = new SerpuloPlanetGenerator();
    halta.mesh = new hexMesh(
      halta, 7,
      1, 0.7, 1.8, 0.7,1,
      2.9,
      
    //detalles,none,none,none,none,none,brillo
      Color.valueOf("e9f0f0"),
      Color.valueOf("dfe6e6"),
      Color.valueOf("ced9d9"),
      Color.valueOf("d5e3e3"),
      Color.valueOf("b7c9c9"),
      Color.valueOf("c1e3e3")
    );
    halta.orbitRadius = 4.75;
    halta.orbitTime = 1075
    halta.rotateTime = 360;
    halta.bloom = false;
    halta.radius = 0.87;
    halta.accessible = false;
    halta.hasAtmosphere = true;
    halta.atmosphereColor = Color.valueOf("ccfcfc");
    halta.atmosphereRadIn = 0.82;
    halta.atmosphereRadOut = 0.825;
    halta.localizedName = "Halta";
    });
