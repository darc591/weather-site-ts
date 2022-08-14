
export enum TimeFormatType {
    DayTime = 'DAY_TIME',
    Hour = 'HOUR',
    Day = 'DAY',
    Time = 'TIME',
    ShortDay = 'SHORT_DAY'
}

const weekday = ["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"];

export const formatTime = (unixTime : number, timeZone: number, formatType : TimeFormatType) => {
    const offSet = (new Date().getTimezoneOffset() * 60 + timeZone);
    const date = new Date(((unixTime + offSet) * 1000));
    switch(formatType){
        case TimeFormatType.Day:
            return weekday[date.getDay()]
        case TimeFormatType.DayTime:
            return `${weekday[date.getDay()]}, ${date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}:${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}`
        case TimeFormatType.Time:
            return `${date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}:${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}`
        case TimeFormatType.ShortDay:
            return `${weekday[date.getDay()].slice(0,3)}`
        case TimeFormatType.Hour:
            return date.getHours();
    }
}
