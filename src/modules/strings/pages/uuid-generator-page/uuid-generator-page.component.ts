import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import * as uuidv1 from 'uuid/v1';
import * as uuidv3 from 'uuid/v3';
import * as uuidv4 from 'uuid/v4';
import * as uuidv5 from 'uuid/v5';

import { SelectChoices } from 'src/modules/controls/select/select.component';

enum UuidVersion {
  v1 = 'v1',
  v3 = 'v3',
  v4 = 'v4',
  v5 = 'v5'
}

enum UuidNamespace {
  DNS = 'DNS',
  URL = 'URL',
  Custom = 'custom'
}

@Component({
  selector: 'c-uuid-generator-page',
  templateUrl: './uuid-generator-page.component.pug'
})
export class UuidGeneratorPageComponent implements OnInit {

  public readonly versions: SelectChoices = [
    {
      value: UuidVersion.v1,
      label: 'v1 (timestamp + mac)',
    },
    {
      value: UuidVersion.v3,
      label: 'v3 (namespace)'
    },
    {
      value: UuidVersion.v4,
      label: 'v4 (unique random)'
    },
    {
      value: UuidVersion.v5,
      label: 'v5 (namespace)'
    }
  ];

  public readonly namespaces: SelectChoices = [
    {
      value: UuidNamespace.DNS,
      label: 'DNS (for domain names)'
    },
    {
      value: UuidNamespace.URL,
      label: 'URL (for URLs)'
    },
    {
      value: UuidNamespace.Custom,
      label: 'Custom'
    }
  ];

  public readonly version: BehaviorSubject<UuidVersion> = new BehaviorSubject(UuidVersion.v4);
  public readonly namespace: BehaviorSubject<UuidNamespace> = new BehaviorSubject(UuidNamespace.DNS);
  public readonly customNamespace: BehaviorSubject<string> = new BehaviorSubject('');
  public readonly input: BehaviorSubject<string> = new BehaviorSubject('');
  public readonly output: BehaviorSubject<string> = new BehaviorSubject('');

  public ngOnInit(): void {
    combineLatest(
      this.version,
      this.namespace,
      this.customNamespace,
      this.input
    ).pipe(
      map(([version, namespace, customNamespace, input]) =>
        this.getUuid(version, namespace, customNamespace, input)
      )
    ).subscribe(output => this.output.next(output));
  }

  public generate(): void {
    const version = this.version.getValue();
    const namespace = this.namespace.getValue();
    const customNamespace = this.customNamespace.getValue();
    const input = this.input.getValue();
    const output = this.getUuid(version, namespace, customNamespace, input);
    this.output.next(output);
  }

  public getUuid(version: UuidVersion, namespace: UuidNamespace, customNamespace: string, value: string): string {
    switch (version) {
      case UuidVersion.v1:
        return uuidv1();
      case UuidVersion.v3:
        return uuidv3(value, this.getNamespace(version, namespace, customNamespace));
      case UuidVersion.v4:
        return uuidv4();
      case UuidVersion.v5:
        return uuidv5(value, this.getNamespace(version, namespace, customNamespace));
    }
  }

  public getNamespace(version: UuidVersion, namespace: UuidNamespace, customNamespace: string): string {
    const uuid = {
      [UuidVersion.v3]: uuidv3,
      [UuidVersion.v5]: uuidv5
    }[version];
    if (!uuid) {
      return null;
    }
    return namespace === UuidNamespace.Custom ? customNamespace : uuid[namespace];
  }

}
