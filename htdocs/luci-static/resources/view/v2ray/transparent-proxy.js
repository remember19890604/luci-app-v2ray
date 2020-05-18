"use strict";"require form";"require v2ray";"require view/v2ray/include/custom as custom";return L.view.extend({load:function(){return v2ray.fileExist("/lib/libustream-ssl.so")},render:function(t){var e,r=t?"":_("Please install %s or %s to enable list update.").format("libustream-openssl","libustream-mbedtls"),o=new form.Map("v2ray","%s - %s".format(_("V2Ray"),_("Transparent Proxy"))),i=o.section(form.NamedSection,"main_transparent_proxy","transparent_proxy");return(e=i.option(form.Value,"redirect_port",_("Redirect port"),_("Enable transparent proxy on Dokodemo-door port."))).value("",_("None")),e.datatype="port",e=i.option(form.MultiValue,"lan_ifaces",_("LAN interfaces"),_("Enable proxy on selected interfaces.")),e=i.option(form.Flag,"use_tproxy",_("Use TProxy"),_("Setup redirect rules with TProxy.")),e=i.option(form.Flag,"only_privileged_ports",_("Only privileged ports"),_("Only redirect traffic on ports below 1024.")),e=i.option(form.Flag,"redirect_udp",_("Redirect UDP"),_("Redirect UDP traffic to V2Ray.")),(e=i.option(form.Flag,"redirect_dns",_("Redirect DNS"),_("Redirect DNS traffic to V2Ray."))).depends("redirect_udp",""),e.depends("redirect_udp","0"),(e=i.option(form.ListValue,"proxy_mode",_("Proxy mode"),_("If enabled, iptables rules will be added to pre-filter traffic and then sent to V2Ray."))).value("default",_("Default")),e.value("cn_direct",_("CN Direct")),e.value("cn_proxy",_("CN Proxy")),e.value("gfwlist_proxy",_("GFWList Proxy")),(e=i.option(form.ListValue,"apnic_delegated_mirror",_("APNIC delegated mirror"))).value("apnic","APNIC"),e.value("arin","ARIN"),e.value("ripe","RIPE"),e.value("iana","IANA"),(e=i.option(custom.ListStatusValue,"_chnroutelist",_("CHNRoute"),r)).template="v2ray/list_status",e.listtype="chnroute",e.updatebtn=t,e.btntitle=_("Update"),(e=i.option(form.ListValue,"gfwlist_mirror",_("GFWList mirror"))).value("github","GitHub"),e.value("gitlab","GitLab"),e.value("bitbucket","Bitbucket"),e.value("pagure","Pagure"),(e=i.option(custom.ListStatusValue,"_gfwlist",_("GFWList"),r)).template="v2ray/list_status",e.listtype="gfwlist",e.updatebtn=t,e.btntitle=_("Update"),(e=i.option(custom.TextValue,"_proxy_list",_("Extra proxy list"),_("One address per line. Allow types: DOMAIN, IP, CIDR. eg: %s, %s, %s").format("www.google.com","1.1.1.1","192.168.0.0/16"))).wrap="off",e.rows=5,e.datatype="string",e.filepath="/etc/v2ray/proxylist.txt",(e=i.option(custom.TextValue,"_direct_list",_("Extra direct list"),_("One address per line. Allow types: DOMAIN, IP, CIDR. eg: %s, %s, %s").format("www.google.com","1.1.1.1","192.168.0.0/16"))).wrap="off",e.rows=5,e.datatype="string",e.filepath="/etc/v2ray/directlist.txt",e=i.option(form.Value,"proxy_list_dns",_("Proxy list DNS"),_("DNS used for domains in proxy list, format: <code>ip#port</code>. eg: %s").format("1.1.1.1#53")),e=i.option(form.Value,"direct_list_dns",_("Direct list DNS"),_("DNS used for domains in direct list, format: <code>ip#port</code>. eg: %s").format("114.114.114.114#53")),(e=i.option(custom.TextValue,"_src_direct_list",_("Local devices direct outbound list"),_("One address per line. Allow types: IP, CIDR. eg: %s, %s").format("192.168.0.19","192.168.0.0/16"))).wrap="off",e.rows=3,e.datatype="string",e.filepath="/etc/v2ray/srcdirectlist.txt",o.render()}});