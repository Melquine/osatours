export interface IDetails {
    Name: string;
    Age: string;
    Location: string;
    Experience: string;
}

export interface IUser {
    profile: string;
    about: string;
    details: IDetails;

}

export interface IList {
    Name: string;
    Age: string;
    Location: string;
    Experience: string;
}

export interface IListProp {
    details: IList | undefined
}

export interface IGuidesInfo {
    name: string;
    section: string;
    profileImage: string;
    url: string;
}

export interface IGuidesInfoProp {
    guide: IGuidesInfo
}

// ******

export interface IToursInfo {
    name: string;
    time: string;
    tourImage: string;
    url: string;
}

export interface IToursInfoProp {
    tour: IToursInfo
}

// ******

export interface IInfo {
    title: string;
    text: string;
    icon: string;
}

export interface IInfoProp {
    info: IInfo
}

export interface IFaqs {
    question: string;
    answear: string;
    id: number
}

export interface IDate {
    month: string,
    day: string,
    year: string
}

export interface Iprop {
    onAction: ({month, day, year}:IDate) => void
}

export interface IDetailsTour {
    tour: string | undefined
}

export interface IForm {
    name: string;
    message: string;
}