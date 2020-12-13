Events.on(ClientLoadEvent, () => {
    const Romtir = new Planet("Romtir", Planets.sun, 1, 1);
    Romtir.generator = new SerpuloPlanetGenerator();
    Romtir.mesh = new SunMesh(
      Romtir, 7,
      1, 0.7, 1.8, 0.7,1,
      2.9,
      
    //detalles,none,none,none,none,none,brillo
      Color.valueOf("46a6abFF"),
      Color.valueOf("4ed7deFF"),
      Color.valueOf("3bb9bfFF"),
      Color.valueOf("1b7175"),
      Color.valueOf("3b7487"),
      Color.valueOf("74c4cf")
    );
    Romtir.orbitRadius = 12;
    Romtir.orbitTime = 30;
    Romtir.rotateTime = 20;
    Romtir.bloom = true;
    Romtir.radius = 2;
    Romtir.accessible = false;
    Romtir.hasAtmosphere = true;
    Romtir.atmosphereColor = Color.valueOf("0b4e57");
    Romtir.atmosphereRadIn = 0.02;
    Romtir.atmosphereRadOut = 0.01;
    Romtir.localizedName = "Romtir";
}); 
