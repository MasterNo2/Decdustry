Events.on(ClientLoadEvent, () => {
    const Eto = new Planet("Eto", Planets.sun, 1, 1);
    Eto.generator = new SerpuloPlanetGenerator();
    Eto.mesh = new SunMesh(
      Eto, 7,
      1, 0.7, 1.8, 0.7,1,
      2.9,
      
    //detalles,none,none,none,none,none,brillo
      Color.valueOf("a8286fFF"),
      Color.valueOf("8c1d5bFF"),
      Color.valueOf("821954FF"),
      Color.valueOf("ba1672"),
      Color.valueOf("e30983"),
      Color.valueOf("b02757FF")
    );
    Eto.orbitRadius = 3;
    Eto.orbitTime = 30;
    Eto.rotateTime = 20;
    Eto.bloom = true;
    Eto.radius = 1;
    Eto.accessible = false;
    Eto.hasAtmosphere = true;
    Eto.atmosphereColor = Color.valueOf("9e1646");
    Eto.atmosphereRadIn = 0.01;
    Eto.atmosphereRadOut = 0.006;
    Eto.localizedName = "Eto";
}); 
