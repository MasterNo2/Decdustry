Events.on(ClientLoadEvent, () => {
    const halta = new Planet("Halta", Planets.sun, 2, 2);
    halta.generator = new SerpuloPlanetGenerator();
    halta.mesh = new SunMesh(
      halta, 7,
      1, 0.7, 1.8, 0.7 , 1 ,
      2.9 ,
      
    //detalles,none,none,none,none,none,brillo
      Color.valueOf("faffff"),
      Color.valueOf("dee3e3"),
      Color.valueOf("d0d9d9"),
      Color.valueOf("e6ebeb"),
      Color.valueOf("cbd1d1"),
      Color.valueOf("d1e0e0")


    );
    halta.orbitRadius = 24;
    halta.orbitTime = 60;
    halta.rotateTime = 40;
    halta.bloom = true;
    halta.radius = 3;
    halta.accessible = false;
    halta.hasAtmosphere = true;
    halta.atmosphereColor = Color.valueOf("9c2710");
    halta.atmosphereRadIn = 0.05;
    halta.atmosphereRadOut = 0.03;
    halta.localizedName = "Halta";
}); 
