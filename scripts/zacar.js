Events.on(ClientLoadEvent, () => {
    const Zacar = new Planet("Zacar", Planets.sun, 2, 2);
    Zacar.generator = new SerpuloPlanetGenerator();
    Zacar.mesh = new SunMesh(
      Zacar, 7,
      1, 0.7, 1.8, 0.7 , 1 ,
      2.9 ,
      
    //detalles,none,none,none,none,none,brillo
      Color.valueOf("d67856"),
      Color.valueOf("bf5d39"),
      Color.valueOf("e36536"),
      Color.valueOf("ad3121"),
      Color.valueOf("e8a668"),
      Color.valueOf("cc6d14")
    );
    Zacar.orbitRadius = 24;
    Zacar.orbitTime = 60;
    Zacar.rotateTime = 40;
    Zacar.bloom = true;
    Zacar.radius = 3;
    Zacar.accessible = false;
    Zacar.hasAtmosphere = true;
    Zacar.atmosphereColor = Color.valueOf("9c2710");
    Zacar.atmosphereRadIn = 0.05;
    Zacar.atmosphereRadOut = 0.03;
    Zacar.localizedName = "Zacar";
}); 
