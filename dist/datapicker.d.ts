import moment from 'moment';
import { SearcherOption } from '../types';
declare const _default: import("vue").DefineComponent<Readonly<{
    props?: any;
    option?: any;
    modelValue?: any;
}>, {
    value: import("vue").WritableComputedRef<any>;
    current: import("vue").Ref<{
        format: (format?: string | undefined) => string;
        startOf: (unitOfTime: moment.unitOfTime.StartOf) => moment.Moment;
        endOf: (unitOfTime: moment.unitOfTime.StartOf) => moment.Moment;
        add: {
            (amount?: moment.DurationInputArg1, unit?: moment.unitOfTime.DurationConstructor | undefined): moment.Moment;
            (unit: moment.unitOfTime.DurationConstructor, amount: string | number): moment.Moment;
        };
        subtract: {
            (amount?: moment.DurationInputArg1, unit?: moment.unitOfTime.DurationConstructor | undefined): moment.Moment;
            (unit: moment.unitOfTime.DurationConstructor, amount: string | number): moment.Moment;
        };
        calendar: {
            (): string;
            (formats: moment.CalendarSpec): string;
            (time?: moment.MomentInput, formats?: moment.CalendarSpec | undefined): string;
        };
        clone: () => moment.Moment;
        valueOf: () => number;
        local: (keepLocalTime?: boolean | undefined) => moment.Moment;
        isLocal: () => boolean;
        utc: (keepLocalTime?: boolean | undefined) => moment.Moment;
        isUTC: () => boolean;
        isUtc: () => boolean;
        parseZone: () => moment.Moment;
        isValid: () => boolean;
        invalidAt: () => number;
        hasAlignedHourOffset: (other?: moment.MomentInput) => boolean;
        creationData: () => moment.MomentCreationData;
        parsingFlags: () => moment.MomentParsingFlags;
        year: {
            (y: number): moment.Moment;
            (): number;
        };
        years: {
            (y: number): moment.Moment;
            (): number;
        };
        quarter: {
            (): number;
            (q: number): moment.Moment;
        };
        quarters: {
            (): number;
            (q: number): moment.Moment;
        };
        month: {
            (M: string | number): moment.Moment;
            (): number;
        };
        months: {
            (M: string | number): moment.Moment;
            (): number;
        };
        day: {
            (d: string | number): moment.Moment;
            (): number;
        };
        days: {
            (d: string | number): moment.Moment;
            (): number;
        };
        date: {
            (d: number): moment.Moment;
            (): number;
        };
        dates: {
            (d: number): moment.Moment;
            (): number;
        };
        hour: {
            (h: number): moment.Moment;
            (): number;
        };
        hours: {
            (h: number): moment.Moment;
            (): number;
        };
        minute: {
            (m: number): moment.Moment;
            (): number;
        };
        minutes: {
            (m: number): moment.Moment;
            (): number;
        };
        second: {
            (s: number): moment.Moment;
            (): number;
        };
        seconds: {
            (s: number): moment.Moment;
            (): number;
        };
        millisecond: {
            (ms: number): moment.Moment;
            (): number;
        };
        milliseconds: {
            (ms: number): moment.Moment;
            (): number;
        };
        weekday: {
            (): number;
            (d: number): moment.Moment;
        };
        isoWeekday: {
            (): number;
            (d: string | number): moment.Moment;
        };
        weekYear: {
            (): number;
            (d: number): moment.Moment;
        };
        isoWeekYear: {
            (): number;
            (d: number): moment.Moment;
        };
        week: {
            (): number;
            (d: number): moment.Moment;
        };
        weeks: {
            (): number;
            (d: number): moment.Moment;
        };
        isoWeek: {
            (): number;
            (d: number): moment.Moment;
        };
        isoWeeks: {
            (): number;
            (d: number): moment.Moment;
        };
        weeksInYear: () => number;
        isoWeeksInYear: () => number;
        isoWeeksInISOWeekYear: () => number;
        dayOfYear: {
            (): number;
            (d: number): moment.Moment;
        };
        from: (inp: moment.MomentInput, suffix?: boolean | undefined) => string;
        to: (inp: moment.MomentInput, suffix?: boolean | undefined) => string;
        fromNow: (withoutSuffix?: boolean | undefined) => string;
        toNow: (withoutPrefix?: boolean | undefined) => string;
        diff: (b: moment.MomentInput, unitOfTime?: moment.unitOfTime.Diff | undefined, precise?: boolean | undefined) => number;
        toArray: () => [number, number, number, number, number, number, number];
        toDate: () => Date;
        toISOString: (keepOffset?: boolean | undefined) => string;
        inspect: () => string;
        toJSON: () => string;
        unix: () => number;
        isLeapYear: () => boolean;
        zone: {
            (): number;
            (b: string | number): moment.Moment;
        };
        utcOffset: {
            (): number;
            (b: string | number, keepLocalTime?: boolean | undefined): moment.Moment;
        };
        isUtcOffset: () => boolean;
        daysInMonth: () => number;
        isDST: () => boolean;
        zoneAbbr: () => string;
        zoneName: () => string;
        isBefore: (inp?: moment.MomentInput, granularity?: moment.unitOfTime.StartOf | undefined) => boolean;
        isAfter: (inp?: moment.MomentInput, granularity?: moment.unitOfTime.StartOf | undefined) => boolean;
        isSame: (inp?: moment.MomentInput, granularity?: moment.unitOfTime.StartOf | undefined) => boolean;
        isSameOrAfter: (inp?: moment.MomentInput, granularity?: moment.unitOfTime.StartOf | undefined) => boolean;
        isSameOrBefore: (inp?: moment.MomentInput, granularity?: moment.unitOfTime.StartOf | undefined) => boolean;
        isBetween: (a: moment.MomentInput, b: moment.MomentInput, granularity?: moment.unitOfTime.StartOf | undefined, inclusivity?: "()" | "[)" | "(]" | "[]" | undefined) => boolean;
        lang: {
            (language: moment.LocaleSpecifier): moment.Moment;
            (): moment.Locale;
        };
        locale: {
            (): string;
            (locale: moment.LocaleSpecifier): moment.Moment;
        };
        localeData: () => moment.Locale;
        isDSTShifted: () => boolean;
        max: {
            (inp?: moment.MomentInput, format?: moment.MomentFormatSpecification | undefined, strict?: boolean | undefined): moment.Moment;
            (inp?: moment.MomentInput, format?: moment.MomentFormatSpecification | undefined, language?: string | undefined, strict?: boolean | undefined): moment.Moment;
        };
        min: {
            (inp?: moment.MomentInput, format?: moment.MomentFormatSpecification | undefined, strict?: boolean | undefined): moment.Moment;
            (inp?: moment.MomentInput, format?: moment.MomentFormatSpecification | undefined, language?: string | undefined, strict?: boolean | undefined): moment.Moment;
        };
        get: (unit: moment.unitOfTime.All) => number;
        set: {
            (unit: moment.unitOfTime.All, value: number): moment.Moment;
            (objectLiteral: moment.MomentSetObject): moment.Moment;
        };
        toObject: () => moment.MomentObjectOutput;
        constructor: Function;
        toString: () => string;
        toLocaleString: () => string;
        hasOwnProperty: (v: PropertyKey) => boolean;
        isPrototypeOf: (v: Object) => boolean;
        propertyIsEnumerable: (v: PropertyKey) => boolean;
    }[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<Readonly<{
    props?: any;
    option?: any;
    modelValue?: any;
}>>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    readonly props?: any;
    readonly option?: any;
    readonly modelValue?: any;
}>;
export default _default;
export declare function getLabel(option: SearcherOption): {
    [x: string]: string;
};
//# sourceMappingURL=datapicker.d.ts.map