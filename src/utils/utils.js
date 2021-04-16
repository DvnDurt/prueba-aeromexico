export const ENDPOINT = {
    busquedas: 'https://www.aeromexico.com/cms/api/v1/airports?language=es&status=1',
    ruta: 'https://www.aeromexico.com/api/v1/checkin/flight-status?store=mx&pos=WEB&flight=&date=#date&origin=#origin&destination=#destino',
    vuelo: 'https://www.aeromexico.com/api/v1/checkin/flight-status?store=mx&pos=WEB&flight=&date=2020-01-01&origin=MEX&destination=JFK'
}

export const getDates = () => {
    
    let hoy = new Date();
    let DIA_EN_MILISEGUNDOS = 24 * 60 * 60 * 1000;
    let manana = new Date(hoy.getTime() + DIA_EN_MILISEGUNDOS);
    let pasadomanana = new Date(hoy.getTime() + (2 * DIA_EN_MILISEGUNDOS));

    return formatDate([hoy, manana, pasadomanana]);
    
    
}

const formatDate = (dates) => {
    if(!dates.length) return;

    const diasLabel = ['Hoy', 'Mañana', 'Pasado Mañana'];

    const data = dates.map((date, index) =>  {

        let format = date.toISOString().split('T')[0].split('-');
        const day = format[2];
        let month = format[1];
        month = months[parseInt(month)-1];

        const stringDate = `${ day } de ${ month }`;
        
        return {
            format: date.toISOString().split('T')[0],
            stringDate,
            label: diasLabel[index]
        }
    });

    return data;
}

const months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
]

export const formatStat = (data) => {
    
    const fstatus = [
        {
            status: 'ARRIVED',
            statusEs: 'Llegó',
            statusStyle: ''
        },
        {
            status: 'CANCEL',
            statusEs: 'Cancelado',
            statusStyle: 'cancel'
        },
        {
            status: 'ON_TIME',
            statusEs: 'A tiempo',
            statusStyle: 'on-time'
        },
    ]

    return fstatus.filter(stat => stat.status == data);

}