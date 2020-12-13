Events.on(ClientLoadEvent, () => {
    const halta = new Planet("halta", Planets.sun, 1, 1);
    halta.generator = new SerpuloPlanetGenerator();
    halta.mesh = new SunMesh(
      halta, 7,
      1, 0.7, 1.8, 0.7,1,
      2.9,
      
    //detalles,none,none,none,none,none,brillo
      Color.valueOf("faffffFF"),
      Color.valueOf("dee3e3FF"),
      Color.valueOf("d0d9d9FF"),
      Color.valueOf("e6ebebFF"),
      Color.valueOf("cbd1d1FF"),
      Color.valueOf("d1e0e0FF")
    );
    halta.orbitRadius = 10;
    halta.orbitTime = 30;
    halta.rotateTime = 20;
    halta.bloom = true;
    halta.radius = 4;
    halta.accessible = false;
    halta.hasAtmosphere = true;
    halta.atmosphereColor = Color.valueOf("0b4e57FF");
    halta.atmosphereRadIn = 0.04;
    halta.atmosphereRadOut = 0.02;
    halta.localizedName = "halta";
}); 
