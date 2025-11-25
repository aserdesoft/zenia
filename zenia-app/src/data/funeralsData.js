const funerals = [
    {
        id: 1,
        nombre: 'Agencia Funeral Gonzalez Funerarias en Guadalajara',
        slogan: 'Funeraria empática y especializada en servicios rápidos y económicos. Destaca su servicio de cremación desde $8900',
        direccion: 'Av. Fidel Velazquez 1267, La Guadalupana, 44220 Guadalajara, Jal.',
        telefono: '3336658146',
        horario: 'Abierto las 24 horas',
        servicios: ['Servicios funerarios de emergencia', 'Cremaciones', 'Velación e inhumación', 'Visita su sitio web:<a href="https://www.agenciafuneralgonzalez.mx/">www.agenciafuneralgonzalez.mx</a>"'],
        latitud: 20.71271078886533,
        longitud: -103.35086634543028
    },
    {
        id: 2,
        nombre: 'Funeraria San Ignacio',
        slogan: 'Funeraria ubicada enfrente de la rampa de urgencias del hospital. Servicios económicos.',
        direccion: 'Salvador Quevedo y Zubieta 889, La Perla, 44360 Guadalajara, Jal.',
        telefono: '3317157685',
        horario: 'Abierto las 24 horas',
        servicios: ['Servicios funerarios de emergencia', 'Cremaciones', 'Velación e inhumación'],
        latitud: 20.685928905891185,
        longitud: -103.33440898692434
    },
    {
        id: 3,
        nombre: 'Recinto Funeral San Javier, Independencia',
        slogan: 'Funeraria reconocída en la ciudad. Cuenta con diversas sucursales, siendo esta la más cercana al hospital..',
        direccion: 'Calz. Independencia Norte 1636, Monumental, 44320 Guadalajara, Jal.',
        telefono: '3315626466',
        horario: 'Abierto las 24 horas',
        servicios: ['Servicios funerarios de emergencia', 'Cremaciones', 'Velación e inhumación', 'Visita su sitio web:<a href="https://recintofuneralsanjavier.mx/">recintofuneralsanjavier.mx/</a>"'],
        latitud: 20.6992823479568, 
        longitud: -103.3286041678795
    },
    {
        id: 4,
        nombre: 'Funerales G. Valdivia Hermanos',
        slogan: 'Funeraria cercana al hospital, enfrente del Centro Médico. ',
        direccion: 'Av. Belisario Domínguez 702-A, Mirador, 44329 Guadalajara, Jal.',
        telefono: '3336519178',
        horario: 'Abierto las 24 horas',
        servicios: ['Servicios funerarios de emergencia', 'Cremaciones', 'Velación e inhumación', 'Visita su sitio web:<a href="https://recintofuneralsanjavier.mx/">recintofuneralsanjavier.mx/</a>"'],
        latitud: 20.68310945301611,
        longitud: -103.32684279222863
    },
    {
        id: 5,
        nombre: 'Grupo Funerario Sion',
        slogan: 'Funeraria cercana al hospital, servicios económicos',
        direccion: 'Av. Belisario Domínguez 468, San Juan de Dios, 44360 Guadalajara, Jal.',
        telefono: '3316674569',
        horario: 'Abierto las 24 horas',
        servicios: ['Servicios funerarios de emergencia', 'Cremaciones', 'Velación e inhumación', 'Visita su sitio web:<a href="https://sistemadeapoyocomunitario.com/">sistemadeapoyocomunitario.com</a>"'],
        latitud: 20.678170497094314,
        longitud: -103.32842564851936
    },
    {
        id: 6,
        nombre: 'Funeraria Hermosa Provincia',
        slogan: 'Funeraria cercana al hospital, servicios económicos',
        direccion: 'Av. Belisario Domínguez 647, San Juan de Dios, 44360 Guadalajara, Jal.',
        telefono: '9341232365',
        horario: 'Abierto las 24 horas',
        servicios: ['Servicios funerarios de emergencia', 'Cremaciones'],
        latitud: 20.681670168347647, 
        longitud: -103.32751656380844
    },
    {
        id: 7,
        nombre: 'Servicios funerarios Alondra',
        slogan: 'Funeraria cercana al hospital, servicios económicos',
        direccion: 'Av. Sierra Nevada 879, Independencia, 44340 Guadalajara, Jal.',
        telefono: '3322268668',
        horario: 'Abierto las 24 horas',
        servicios: ['Servicios funerarios de emergencia', 'Cremaciones','Traslados','Visita sus redes sociales:<a href="https://www.facebook.com/FunerariaAlondra1997/?mibextid=ZbWKwL">Facebook</a>'],
        latitud: 20.687421034243712, 
        longitud: -103.33408759585664
    },
    {
        id: 8,
        nombre: 'El Buen Samaritano',
        slogan: 'Funeraria cercana al hospital, servicios económicos',
        direccion: 'Calz. Independencia Norte 1009, Independencia, 44379 Guadalajara, Jal.',
        telefono: '3336379827',
        horario: 'Abierto las 24 horas',
        servicios: ['Servicios funerarios de emergencia', 'Cremaciones'],
        latitud: 20.69059308483719,
        longitud: -103.33380024327508
    },
    {
        id: 9,
        nombre: 'Latinoamericana Recinto Funeral',
        slogan: 'Funeraria reconocída en la ciudad. Cuenta con diversas sucursales, siendo esta la más cercana al hospital.',
        direccion: 'Calz. Federalismo 1485, Mezquitan, 44260 Guadalajara, Jal.',
        telefono: '3338232428',
        horario: 'Abierto las 24 horas',
        servicios: ['Servicios funerarios de emergencia', 'Cremaciones', 'Velación e inhumación', 'Visita su sitio web:<a href="https://latinofuneral.com/">latinofuneral.com/</a>"'],
        latitud: 20.698050529431427,
        longitud: -103.35527039052677
    },
    {
        id: 10,
        nombre: 'PROGRAMA DE APOYO DE BENEFICIO SOCIAL',
        slogan: 'Funeraria reconocída en la ciudad. Cuenta con diversas sucursales, siendo esta la más cercana al hospital. Ayuda a obtener paquetes funerarios más baratos',
        direccion: 'FEDERALISMO #1485 NTE, San Miguel de Mezquitan, 44260 Guadalajara, Jal.',
        telefono: '3338232155',
        horario: 'Abierto las 24 horas',
        servicios: ['Servicios funerarios', 'Cremaciones', 'Velación e inhumación', 'Planes funerarios', 'Visita su sitio web:<a href="http://funerariaseconomicas.com.mx/">funerariaseconomicas.com.mx</a>"'],
        latitud: 20.69808965969999,
        longitud: -103.35521754389801,
    },


];

export default funerals;
