/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from '../../../../../../node_modules/@ng-bootstrap/ng-bootstrap/alert/alert.ngfactory';
import * as import3 from '@ng-bootstrap/ng-bootstrap/alert/alert';
import * as import4 from '@ng-bootstrap/ng-bootstrap/alert/alert-config';
import * as import5 from '../../../../../../../../src/main/webapp/app/shared/alert/alert-error.component';
import * as import6 from 'ng-jhipster/src/service/alert.service';
import * as import7 from 'ng-jhipster/src/service/event-manager.service';
import * as import8 from 'ng2-translate/src/translate.service';
const styles_JhiAlertErrorComponent:any[] = ([] as any[]);
export const RenderType_JhiAlertErrorComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_JhiAlertErrorComponent,
  data: {}
}
);
function View_JhiAlertErrorComponent_1(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),7,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(278528,(null as any),0,import1.NgClass,[
      import0.IterableDiffers,
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
      ,{ngClass: [
        0,
        'ngClass'
      ]
    },(null as any)),
    import0.ɵpod([
      'alert.position',
      'toast'
    ]
    ),
    (l()(),import0.ɵted((null as any),['\n                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),2,'ngb-alert',[[
        'close',
        'alert.close(alerts)'
      ]
    ],(null as any),(null as any),(null as any),import2.View_NgbAlert_0,import2.RenderType_NgbAlert)),
      import0.ɵdid(49152,(null as any),0,import3.NgbAlert,[import4.NgbAlertConfig],{type: [
        0,
        'type'
      ]
    },(null as any)),
      (l()(),import0.ɵeld(0,(null as any),0,0,'pre',([] as any[]),[[
        8,
        'innerHTML',
        1
      ]
    ],(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n            ']))
  ]
  ,(ck,v) => {
    const currVal_0:any = ck(v,2,0,true,v.context.$implicit.toast);
    ck(v,1,0,currVal_0);
    const currVal_1:any = import0.ɵinlineInterpolate(1,'',v.context.$implicit.type,'');
    ck(v,5,0,currVal_1);
  },(ck,v) => {
    const currVal_2:any = v.context.$implicit.msg;
    ck(v,6,0,currVal_2);
  });
}
export function View_JhiAlertErrorComponent_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),4,'div',[
      [
        'class',
        'alerts'
      ]
      ,
      [
        'role',
        'alert'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_JhiAlertErrorComponent_1)),
    import0.ɵdid(802816,(null as any),0,import1.NgForOf,[
      import0.ViewContainerRef,
      import0.TemplateRef,
      import0.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n        ']))
  ]
  ,(ck,v) => {
    var co:import5.JhiAlertErrorComponent = v.component;
    const currVal_0:any = co.alerts;
    ck(v,4,0,currVal_0);
  },(null as any));
}
function View_JhiAlertErrorComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'jhi-alert-error',([] as any[]),(null as any),(null as any),(null as any),View_JhiAlertErrorComponent_0,RenderType_JhiAlertErrorComponent)),
    import0.ɵdid(180224,(null as any),0,import5.JhiAlertErrorComponent,[
      import6.AlertService,
      import7.EventManager,
      import8.TranslateService
    ]
    ,(null as any),(null as any))
  ]
  ,(null as any),(null as any));
}
export const JhiAlertErrorComponentNgFactory:import0.ComponentFactory<import5.JhiAlertErrorComponent> = import0.ɵccf('jhi-alert-error',import5.JhiAlertErrorComponent,View_JhiAlertErrorComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2hvbWUvbmFudWNoaS9QYWtldEFwcC9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9hbGVydC9hbGVydC1lcnJvci5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vaG9tZS9uYW51Y2hpL1Bha2V0QXBwL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2FsZXJ0L2FsZXJ0LWVycm9yLmNvbXBvbmVudC50cyIsIm5nOi8vL2hvbWUvbmFudWNoaS9QYWtldEFwcC9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9hbGVydC9hbGVydC1lcnJvci5jb21wb25lbnQudHMuSmhpQWxlcnRFcnJvckNvbXBvbmVudC5odG1sIiwibmc6Ly8vaG9tZS9uYW51Y2hpL1Bha2V0QXBwL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2FsZXJ0L2FsZXJ0LWVycm9yLmNvbXBvbmVudC50cy5KaGlBbGVydEVycm9yQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydHNcIiByb2xlPVwiYWxlcnRcIj5cbiAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGFsZXJ0IG9mIGFsZXJ0c1wiICBbbmdDbGFzc109XCJ7J2FsZXJ0LnBvc2l0aW9uJzogdHJ1ZSwgJ3RvYXN0JzogYWxlcnQudG9hc3R9XCI+XG4gICAgICAgICAgICAgICAgPG5nYi1hbGVydCB0eXBlPVwie3thbGVydC50eXBlfX1cIiBjbG9zZT1cImFsZXJ0LmNsb3NlKGFsZXJ0cylcIj48cHJlIFtpbm5lckhUTUxdPVwiYWxlcnQubXNnXCI+PC9wcmU+PC9uZ2ItYWxlcnQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+IiwiPGpoaS1hbGVydC1lcnJvcj48L2poaS1hbGVydC1lcnJvcj4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0VZO2dCQUFBOzs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBbUM7TUFBQTtNQUFBO0lBQUE7SUFBQTtJQUEyRDtNQUMxRjtRQUFBO1FBQUE7TUFBQTtJQUFBO2tCQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBNkQ7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQStDOzs7SUFEN0U7SUFBbkMsU0FBbUMsU0FBbkM7SUFDZTtJQUFYLFNBQVcsU0FBWDs7SUFBa0U7SUFBTCxTQUFLLFNBQUw7Ozs7O0lBSDdFO0lBQ1E7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO0lBQWlDO0lBQzdCO2dCQUFBOzs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBRU07Ozs7SUFGRDtJQUFMLFNBQUssU0FBTDs7Ozs7SUNGWjtnQkFBQTs7OztJQUFBO0tBQUE7Ozs7In0=
