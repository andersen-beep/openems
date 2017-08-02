import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';

import { TRANLSATION as DE } from './de';
import { TRANLSATION as EN } from './en';

export class MyTranslateLoader implements TranslateLoader {

    constructor() { }

    getTranslation(lang: string): Observable<any> {
        if (lang === 'de') {
            return Observable.of(DE);
        } else {
            return Observable.of(EN);
        }
    }
}