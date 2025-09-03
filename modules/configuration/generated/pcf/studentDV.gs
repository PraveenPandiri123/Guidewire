package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/billing/studentDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class studentDV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter () : void {
    __widgetOf(this, pcf.studentDV, SECTION_WIDGET_CLASS).setVariables(false, {})
  }
  
  function refreshVariables () : void {
    __widgetOf(this, pcf.studentDV, SECTION_WIDGET_CLASS).setVariables(true, {})
  }
  
  
}