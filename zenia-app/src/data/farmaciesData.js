const farmacies = [
    {
        id: 1,
        nombre: 'Salura Farmacias ® Hospital Civil Nuevo',
        slogan: 'Tu farmacia 24 horas frente al Hospital Civil, especializada en alta especialidad e insumos.',
        direccion: 'Salvador Quevedo y Zubieta 900-A, La Perla, 44360 Guadalajara, Jal.',
        telefono: '33-2706-7439',
        horario: 'Lun-Vie 24 horas, Sáb 7:00 AM - 10:00 PM, Dom 24 horas',
        servicios: ['Medicamentos de alta especialidad', 'Servicio a domicilio', 'Insumos médicos', '24 horas'],
        latitud: 20.68530594650836,
        longitud: -103.33389602828466
    },
    {
        id: 2,
        nombre: 'Farmacias Guadalajara',
        slogan: '¡Siempre abierta! Tu tienda de conveniencia y farmacia completa.',
        direccion: 'Calle Hospital, Calz. Independencia Norte esquina, El Retiro, 44280 Guadalajara, Jal.',
        telefono: '33-3669-3333',
        horario: 'Abierto las 24 horas',
        servicios: ['Medicamentos', 'Artículos de conveniencia', 'Entrega a domicilio', 'Foto impresiones'],
        latitud: 20.685880341093156,
        longitud: -103.33635735650991
    },
    {
        id: 3,
        nombre: 'Onkomed Farmacia',
        slogan: 'Especialistas en medicamentos oncológicos y de alta especialidad.',
        direccion: 'Coronel Calderón 796, El Retiro, 44270 Guadalajara, Jal.',
        telefono: '33-3074-6165',
        horario: 'Lun-Dom 8:00 AM - 8:00 PM',
        servicios: ['Medicamentos oncológicos', 'Especialidades médicas', 'Material oncológico', 'Servicio a domicilio'],
        latitud: 20.68818934167396,
        longitud: -103.34279777873715
    },
    {
        id: 4,
        nombre: 'Farmacias Familiares Hospital Civil Nuevo',
        slogan: 'Tu opción de confianza con medicamentos generales, naturales y servicio a domicilio.',
        direccion: 'Salvador Quevedo y Zubieta 895, La Perla, 44360 Guadalajara, Jal.',
        telefono: '800-708-2272',
        horario: 'Lun-Sáb 8:00 AM - 9:00 PM, Dom 8:00 AM - 3:00 PM',
        servicios: ['Medicamentos generales', 'Productos naturales', 'Patente', 'Servicio a domicilio', 'Recogida en tienda'],
        latitud: 20.686035342745967,
        longitud: -103.33446335721138
    },
    {
        id: 5,
        nombre: 'Farmacia Yazmin',
        slogan: 'Farmacia local con servicios de apoyo como copias y artículos de papelería.',
        direccion: 'Sierra Nevada 815, Independencia, 44340 Guadalajara, Jal.',
        telefono: '33-2641-3183',
        horario: 'Lun-Vie 7:00 AM - 7:00 PM',
        servicios: ['Medicamento de patente', 'Genérico', 'Dermatológico','CURP','Copias'],
        latitud: 20.687322441127154,
        longitud: -103.33423569113258
    },
    {
        id: 6,
        nombre: 'Farmacia Similares',
        slogan: 'Consulta y medicamentos genéricos al mejor precio.',
        direccion: 'Calz. Independencia Norte 422, La Perla, 44360 Guadalajara, Jal.',
        telefono: '800-911-6666', 
        horario: 'Lun-Sáb 8:00 AM - 9:00 PM, Dom 9:00 AM - 9:00 PM',
        servicios: ['Medicamentos genéricos y de patente', 'Consultorio médico', 'Análisis clínicos', 'Servicio a domicilio', 'Recogida en tienda'],
        latitud: 20.681614830897054,
        longitud: -103.33814440752805
    },
    {
        id: 7,
        nombre: 'Farmacia La Paz - H. Civil Nuevo',
        slogan: 'Medicamentos y artículos de salud con horarios extendidos cerca del Nuevo Hospital Civil.',
        direccion: 'Salvador Quevedo y Zubieta 875, Col. La Perla, 44360 Guadalajara, Jal.',
        telefono: '33-3617-4813',
        horario: 'Lun-Dom 7:00 AM - 9:00 PM',
        servicios: ['Medicamentos', 'Artículos de salud', 'Cuidado personal'],
        latitud: 20.685545148601843,
        longitud: -103.33407680773901
    },
    {
        id: 8,
        nombre: 'Pharmacy Carrey, S.A. De C.V.',
        slogan: 'Amplio surtido, ortopedia e insumos para el cuidado hospitalario.',
        direccion: 'Humboldt 650, Col. Independencia Oriente, 44360 Guadalajara, Jal.',
        telefono: '33-3658-4344',
        horario: 'Lun-Vie 8:00 AM - 9:00 PM, Sáb-Dom 9:00 AM - 9:00 PM',
        servicios: ['Amplio surtido de medicamentos', 'Ortopedia', 'Insumos'],
        latitud: 20.68561167683739,
        longitud: -103.34349920545169
    },
    {
        id: 9, 
        nombre: 'Farmacia Iris',
        slogan: 'La combinación perfecta: medicamentos, abarrotes y productos básicos.',
        direccion: 'Salvador Quevedo y Zubieta 887, La Perla, 44360 Guadalajara, Jal.',
        telefono: '33-3617-2687',
        horario: 'Lun-Sáb 9:00 AM - 8:00 PM',
        servicios: ['Medicamentos genéricos y patente', 'Abarrotes', 'Productos básicos'],
        latitud: 20.685603191709554,
        longitud: -103.33414810400521
    },
    {
        id: 10,
        nombre: 'COCKTAILPIEL Farmacia Dermatológica',
        slogan: 'Tu especialista en salud de la piel: fórmulas magistrales y dermocosméticos.',
        direccion: 'Sierra Nevada 881A, Independencia Oriente, 44340 Guadalajara, Jal.',
        telefono: '33-3801-9514',
        horario: 'Lun-Vie 9:00 AM - 6:00 PM, Sáb 9:00 AM - 2:00 PM',
        servicios: ['Dermatológica', 'Fórmulas Magistrales', 'Dermocosméticos'],
        latitud: 20.68760826145338,
        longitud: -103.3335731271512
    }
];

export default farmacies;