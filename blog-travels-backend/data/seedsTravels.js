const { getCloudinaryUrl } = require('../config/storage.config'); 

module.exports.travelsData = [
    {
      image: getCloudinaryUrl(
        "Basílica_De_San_Marcos_En_Venecia-sz-grande_q6xmr9"
      ), // Reemplaza con tus publicIds
      title: "Venecia: Ciudad de los Canales",
      subtitle: "Un laberinto de agua y encanto eterno",
      description:
        '"Venecia es un laberinto de canales y puentes que te transporta a otra época. Navegar en góndola al atardecer, con la música resonando entre los palacios, es una experiencia mágica. Perderse por sus callejuelas, descubrir plazas escondidas y disfrutar de la gastronomía local son placeres que no se olvidan. Venecia es un sueño flotante, una ciudad que enamora a cada paso."\n"La Basílica de San Pedro es un monumento a la grandeza y la fe. Su imponente cúpula domina el horizonte de Roma, y su interior alberga obras de arte invaluables. Caminar por sus pasillos es sentir la historia y la espiritualidad en cada rincón. La vista desde la cúpula es simplemente espectacular, un panorama que abarca toda la ciudad eterna. La Basílica de San Pedro es un lugar que inspira y emociona."',
    },
    {
      image: getCloudinaryUrl(
        "Foto_De_Machu_Picchu-sz-grande_eu8cib"
      ), // Reemplaza con tus publicIds

      title: "Machu Picchu: La Ciudad Perdida de los Incas",
      subtitle: "Un viaje a la cima del mundo andino",
      description:
        '"Machu Picchu, la joya de los Andes peruanos, es un testimonio del ingenio y la grandeza del Imperio Inca. Sus terrazas verdes, templos de piedra y vistas panorámicas te dejarán sin aliento. Caminar por sus senderos es como retroceder en el tiempo, sintiendo la energía de una civilización que aún nos asombra. El amanecer sobre Machu Picchu es un espectáculo mágico, con la ciudadela envuelta en neblina y las montañas iluminándose lentamente. Explora sus misterios, descubre sus secretos y déjate cautivar por la belleza de este lugar sagrado. Machu Picchu es una experiencia que te conectará con la historia y la naturaleza de una manera única."',
    },

    {
      image: getCloudinaryUrl("Tokio-sz-grande_okzezh"), // Reemplaza con tus publicIds

      title: "Tokio: Metrópolis del Futuro",
      subtitle: "Donde la tradición y la innovación se entrelazan",
      description:
        '"Tokio, la capital de Japón, es una ciudad que te transporta a un mundo de contrastes. Rascacielos futuristas se alzan junto a templos ancestrales, creando un paisaje urbano único. Sumérgete en la vibrante cultura pop de Akihabara, pasea por los tranquilos jardines del Palacio Imperial o disfruta de la exquisita gastronomía en los puestos callejeros de Shibuya. La energía de Tokio es contagiosa, desde el bullicio de sus calles hasta la serenidad de sus parques. Descubre la magia de esta metrópolis que nunca duerme, donde el pasado y el futuro convergen en una experiencia inolvidable."',
    },
    {
      image: getCloudinaryUrl("Alicante-sz-grande_hg2pw9"), // Reemplaza con tus publicIds
      title: "Alicante: Sol y Mar Mediterráneo",
      subtitle: "Un paraíso de historia y playas doradas",
      description:
        '"Alicante, la joya de la Costa Blanca, te invita a disfrutar de su clima cálido y su ambiente relajado. El Castillo de Santa Bárbara, con sus vistas panorámicas, te transportará a épocas pasadas, mientras que el Paseo de la Explanada, con sus mosaicos ondulantes, te invita a pasear junto al mar. Sumérgete en las aguas cristalinas de la playa del Postiguet, descubre la rica gastronomía local en sus numerosos restaurantes y déjate seducir por la vida nocturna en el Barrio Antiguo. Alicante es una ciudad que lo tiene todo: historia, cultura, playas y una vibrante vida mediterránea."',
    },
    {
      image: getCloudinaryUrl(
        "Puerta_De_Handara-sz-grande_n5aa6v"
      ), // Reemplaza con tus publicIds

      title: "Puerta de Handara: Un Portal a la Serenidad Balinesa",
      subtitle: "Donde la espiritualidad y la belleza natural se fusionan",
      description:
        '"La Puerta de Handara, un icono de Bali, es mucho más que una entrada; es un portal a un mundo de paz y belleza. Su imponente estructura, rodeada de exuberante vegetación y montañas brumosas, te transporta a un reino de tranquilidad. Siente la energía espiritual que emana de este lugar sagrado, captura la imagen perfecta para tus recuerdos y déjate cautivar por la atmósfera mágica que lo envuelve. La Puerta de Handara es una experiencia que te conecta con la esencia de Bali, un lugar donde la naturaleza y la espiritualidad se entrelazan en perfecta armonía."',
    },
    {
      image: getCloudinaryUrl(
        "Hamburg-Deutschlandsz-grande_qirxwn"
      ), // Reemplaza con tus publicIds

      title: "Hamburgo: La Perla del Norte",
      subtitle: "Un crisol de cultura, historia y vida marítima",
      description:
        '"Hamburgo, una ciudad portuaria con alma cosmopolita, te invita a explorar su rica historia y su vibrante presente. Pasea por el Speicherstadt, un laberinto de almacenes de ladrillo rojo declarado Patrimonio de la Humanidad, navega por el río Elba y admira el imponente puerto, uno de los más grandes de Europa. Descubre la vida nocturna en el Reeperbahn, disfruta de la música en vivo en sus numerosos clubes y prueba la deliciosa gastronomía local en sus restaurantes. Hamburgo es una ciudad que combina la elegancia de su arquitectura con la energía de su gente, un lugar donde la tradición y la modernidad se encuentran en perfecta armonía."',
    },
    {
      image: getCloudinaryUrl("Irlanda-sz-grande_t4t3rl"), // Reemplaza con tus publicIds

      title: "Stonehenge: Un Enigma de Piedra",
      subtitle: "Donde el misterio ancestral se encuentra con el cielo",
      description:
        '"Stonehenge, un monumento megalítico que desafía el tiempo, te invita a contemplar su misteriosa belleza. Sus imponentes piedras, erguidas en la llanura de Salisbury, evocan preguntas sin respuesta sobre su origen y propósito. Siente la energía ancestral que emana de este lugar sagrado, observa cómo la luz del sol juega con las sombras entre las piedras y déjate llevar por la magia de este monumento milenario. Stonehenge es una ventana al pasado, un lugar donde la historia y el misterio se entrelazan en un paisaje que te dejará sin aliento."',
    },
    {
      image: getCloudinaryUrl(
        "Torre_De_La_Perla_Oriental-sz-grande_cu5vjv"
      ), // Reemplaza con tus publicIds
      title: "Shanghái: El Dragón del Este y la Perla Oriental",
      subtitle: "Donde el futuro se eleva sobre el río Huangpu",
      description:
        '"Shanghái, una metrópolis que desafía los límites de la imaginación, te invita a sumergirte en su vibrante energía. La Torre Perla Oriental, con sus esferas brillantes, domina el horizonte de Pudong, ofreciendo vistas panorámicas que te dejarán sin aliento. Pasea por el Bund, donde la arquitectura colonial se encuentra con los rascacielos futuristas, y explora los tranquilos jardines de Yu, un oasis de paz en medio del bullicio urbano. Saborea la exquisita gastronomía local, desde los dumplings hasta el pato laqueado, y déjate llevar por la vida nocturna en sus elegantes bares y clubes. Shanghái es una ciudad que te sorprenderá en cada esquina, un lugar donde la tradición y la modernidad se fusionan en una experiencia inolvidable."',
    },
    {
      image: getCloudinaryUrl(
        "Vista_Aérea_De_Sydney-sz-grande_gvb5kv"
      ),
      title: "Sídney: La Ciudad de la Bahía",
      subtitle: "Donde la elegancia urbana se encuentra con la belleza natural",
      description:
        '"Sídney, la joya de Australia, te cautiva con su icónica Ópera y el imponente Puente de la Bahía. Navega por su puerto, uno de los más hermosos del mundo, y disfruta de las vistas panorámicas desde la Torre de Sídney. Relájate en las playas doradas de Bondi, explora los jardines botánicos reales y sumérgete en la vibrante vida nocturna de Darling Harbour. Sídney es una ciudad que combina la elegancia de su arquitectura con la belleza de su entorno natural, un lugar donde la aventura y el relax se encuentran en perfecta armonía."',
    },
    {
      image: getCloudinaryUrl(
        "Vista_Aérea_De_Torre_Eiffel-sz-grande_gcddvj"
      ),
      title: "París: La Ciudad de la Luz",
      subtitle: "Donde el romance y la historia se funden en un abrazo eterno",
      description:
        '"París, la capital del amor y la elegancia, te invita a perderte en sus encantadoras calles y a descubrir sus tesoros ocultos. La majestuosa Torre Eiffel, con su silueta icónica, domina el horizonte, mientras que el Louvre alberga obras maestras que te dejarán sin aliento. Pasea por los Campos Elíseos, admira la belleza de la Catedral de Notre Dame y déjate seducir por el ambiente bohemio de Montmartre. Saborea la exquisita gastronomía francesa, desde los croissants recién horneados hasta los vinos de Burdeos, y déjate llevar por la magia de esta ciudad que nunca deja de sorprender."',
    },
  ];
