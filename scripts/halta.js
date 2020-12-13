Events.on(ClientLoadEvent, () => {
    const halta = new Planet("halta", Planets.sun, 3, 1.2;
    halta.generator = new SerpuloPlanetGenerator();
    halta.mesh = new SunMesh(
      Romtir, 7,
      1, 0.7, 1.8, 0.7,1,
      2.9,
      
    //detalles,none,none,none,none,none,brillo
      Color.valueOf("faffff"),
      Color.valueOf("dee3e3"),
      Color.valueOf("d0d9d9"),
      Color.valueOf("e6ebeb"),
      Color.valueOf("cbd1d1"),
      Color.valueOf("d1e0e0")
    );
    halta.orbitRadius = 16.3;
    halta.orbitTime = 1075;
    halta.rotateTime = 360;
    halta.bloom = true;
    halta.radius = 0.87;
    halta.accessible = false;
    halta.hasAtmosphere = true;
    halta.atmosphereColor = Color.valueOf("cceded");
    halta.atmosphereRadIn = 0.82;
    halta.atmosphereRadOut = 0.825;
    halta.localizedName = "Halta";
    });
