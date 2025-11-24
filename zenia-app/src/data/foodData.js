const foodPlaces = [
    {
        id: 1,
        nombre: 'Fonda "El Doctor"',
        slogan: 'Comida casera y tradicional, el respiro perfecto para el personal médico y visitantes.',
        direccion: 'Sierra Nevada 829, Independencia Oriente, 44340 Guadalajara, Jal.',
        telefono: '33-3245-7634',
        horario: 'Lun-Vie 8:00 AM - 5:30 PM',
        servicios: ['Comida Corrida y Menú del Día','Platillos Caseros', 'Para llevar'],
        latitud: 20.68724194840008,
        longitud: -103.33426379135328
    },
    {
        id: 2,
        nombre: 'Mind Café Hospital Civil',
        slogan: 'El café que impulsa tu mente. Desayunos, bebidas especiales y servicio rápido.',
        direccion: 'Sierra Nevada 815, Independencia, 44340 Guadalajara, Jal.',
        telefono: '33-3658-8496',
        horario: 'Lun-Vie 6:30 AM - 9:00 PM, Sáb 7:00 AM - 5:30 PM',
        servicios: ['Café de especialidad', 'Tés y bebidas frías', 'Panadería y repostería'],
        latitud: 20.687307528329583,
        longitud: -103.33422999423694
    },
    {
        id: 3,
        nombre: 'Los Chilaquiles del Güero',
        slogan: 'Especialistas en chilaquiles: verdes, rojos y especiales, perfectos para empezar el día.',
        direccion: 'Sierra Nevada 843, Independencia Oriente, 44340 Guadalajara, Jal.',
        telefono: '33-1663-7196',
        horario: 'Lun-Vie 8:00 AM - 3:30 PM, Sáb 8:00 AM - 12:00 PM',
        servicios: ['Chilaquiles en diversas preparaciones', 'Huevos al gusto y platillos para el almuerzo', 'Jugo y café'],
        latitud: 20.687439620945096,
        longitud: -103.33396866639592
    },
    {
        id: 4,
        nombre: 'Smash Burger',
        slogan: 'Hamburguesas y platillos a la parrilla con el auténtico sabor a carbón.',
        direccion: 'Monte Cáucaso 100-interior 17, Independencia, 44340 Guadalajara, Jal.',
        telefono: '33-2599-0634',
        horario: 'Lun-Vie 10:00 AM - 8:00 PM, Sáb 10:00 AM - 6:00 PM',
        servicios: ['Hamburguesas a la parrilla', 'Hot dogs y salchichas', 'Papas fritas y complementos', 'Servicio a domicilio'],
        latitud: 20.687717099288243,
        longitud: -103.33339768857914
    },
    {
        id: 5,
        nombre: 'The Pizza Place',
        slogan: 'Pizzas frescas y personales para tu hora de comida. El mejor sabor cerca del hospital.',
        direccion: 'Sierra Nevada 921, Independencia Oriente, 44340 Guadalajara, Jal.',
        telefono: '33-2687-7869',
        horario: 'Lun-Vie 9:00 AM - 6:00 PM',
        servicios: ['Pizzas individuales y grandes', 'Bebidas y refrescos', 'Comida para llevar y entrega local'],
        latitud: 20.68831259007319,
        longitud: -103.33275931443741
    },
    {
        id: 6,
        nombre: 'Tacos al vapor GARMAN`S',
        slogan: 'Los mejores tacos al vapor de la zona. Ideales para un almuerzo rápido y económico.',
        direccion: 'C. Mariano Jiménez 863-a, La Perla, 44360 Guadalajara, Jal.',
        telefono: '33-3106-7452',
        horario: 'Lun-Vie 8:00 AM - 2:00 PM, Sáb 8:00 AM - 12:30 PM',
        servicios: ['Tacos al vapor de carne, papa y frijol','Refrescos y aguas frescas', 'Servicio rápido y para llevar'],
        latitud: 20.6861486897316,
        longitud: -103.33468774225472
    },
    {
        id: 7,
        nombre: 'Slash Coffee',
        slogan: 'Tu parada diaria de café. Bebidas gourmet y ambiente relajado para empezar el día.',
        direccion: 'C. Mariano Jiménez 823, La Perla, 44360 Guadalajara, Jal.',
        telefono: '33-2066-3001',
        horario: 'Lun-Vie 6:30 AM - 8:30 PM, Sáb 7:00 AM - 2:00 PM ',
        servicios: ['Café expreso y bebidas frías', 'Tés y tisanas', 'Servicio a la mesa y WiFi'],
        latitud: 20.685368609266,
        longitud: -103.33467765716316
    },
    {
        id: 8, 
        nombre: 'Fafalafel',
        slogan: 'El sabor del Medio Oriente. Falafel, comida vegetariana/vegana y opciones saludables.',
        direccion: 'C. Mariano Jiménez 847, La Perla, 44360 Guadalajara, Jal.',
        telefono: '33-2886-4797',
        horario: 'Mar-Vie 11:00 AM - 4:00 PM',
        servicios: ['Falafel en pita o plato', 'Opciones vegetarianas y veganas', 'Comida para llevar'],
        latitud: 20.685772871124183,
        longitud: -103.33466402782034
    },
    {
        id: 9,
        nombre: 'Super Tortas Ahogadas Rober\'s',
        slogan: 'El sabor de Jalisco en cada bocado. Las mejores tortas ahogadas, rápidas y llenadoras.',
        direccion: 'López Portillo 745, La Perla, 44360 Guadalajara, Jal.',
        telefono: '33-3618-7524',
        horario: 'Lun-Mar, Jue-Dom 9:00 AM - 4:00 PM (Miércoles Cerrado)',
        servicios: ['Tortas Ahogadas de carne y/o buche', 'Tacos dorados', 'Aguas frescas tradicionales', 'Servicio a la mesa y para llevar'],
        latitud: 20.684052680178706,
        longitud: -103.33386208634226
    },
    {
        id: 10,
        nombre: 'El Alma del Corte',
        slogan: 'El sabor de la parrilla en cortes finos y platillos a la brasa.',
        direccion: 'Sierra Nevada 805, Independencia Oriente, 44340 Mexico, Jal.',
        telefono: '33-3169-8336',
        horario: 'Lun-Vie 9:00 AM - 6:00 PM, Sáb 9:00 AM - 5:00 PM',
        servicios: ['Cortes de carne (arrachera, rib eye)', 'Hamburguesas', 'Ensaladas frescas', 'Comida para llevar'],
        latitud: 20.687035617797306,
        longitud: -103.3344900627136
    }
];

export default foodPlaces;