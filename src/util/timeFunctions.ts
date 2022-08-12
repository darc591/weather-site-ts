
export enum TimeFormatType {
    DayTime = 'DAY_TIME',
    Day = 'DAY',
    Time = 'TIME',
    ShortDay = 'SHORT_DAY'
}

const weekday = ["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"];

export const formatTime = (unixTime : number, formatType : TimeFormatType) => {
    const date = new Date(unixTime *1000);

    switch(formatType){
        case TimeFormatType.Day:
            return weekday[date.getDay()]
            break
        case TimeFormatType.DayTime:
            return `${weekday[date.getDay()]}, ${date.getHours()}:${date.getMinutes()=== 0 ? '00' : date.getMinutes()}`
            break
        case TimeFormatType.Time:
            return `${date.getHours()}:${date.getMinutes()}`
            break
        case TimeFormatType.ShortDay:
            return `${weekday[date.getDay()].slice(0,3)}`
        
    }
}
