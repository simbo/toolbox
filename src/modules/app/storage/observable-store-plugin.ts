import { Subject, Observable } from 'rxjs';

export function observableStorePlugin() {

  const subjects = new Map<string, Subject<any>>();

  return {

    observe(superFn: () => void, key: string): Observable<any> {
      let subject = subjects.get(key);
      if (!subject) {
        subject = new Subject<any>();
        subjects.set(key, subject);
      }
      return subject.asObservable();
    },

    set(
      superFn: (key: string, value: string) => void,
      key: string,
      value: any
    ): void {
      const subject = subjects.get(key);
      superFn(key, value);
      if (subject) {
        subject.next(value);
      }
    }

  };

}
