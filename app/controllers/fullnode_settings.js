function close() {
  $.win.close();
}

function deleteData() {
  var dialog = globals.util.createDialog({
    title: L(""),
    message: L("core_delete"),
    buttonNames: [L("core_delete"), L("label_cancel")],
    cancel: 1
  });
  dialog.addEventListener("click", function (e) {
    if (e.index != e.source.cancel) {
      globals.fullNodeController.deleteCore();
      alert(L("label_done"));
      globals.resetFullnodeUI();
    }
  });
  dialog.show();

}

function goToConfig() {
  if (globals.fullNodeController.isInstalled() == false) {
    alert(L("please_start_core"));
    return;
  }
    let conf = globals.fullNodeController.readConf();
    Alloy.createController("fullnode_conf", { conf: conf })
      .getView()
      .open();
  
}

function viewLogs() {
  Alloy.createController("fullnode_logs")
    .getView()
    .open();
}

function goToConsole() {
  Alloy.createController("fullnode_console")
    .getView()
    .open();
}

function goToDownloadUTXOPage(){
  Alloy.createController("components/full_node_utxo_downloader")
  .getView()
  .open();

}

function reindex(){
  var dialog = globals.util.createDialog({
    title: L(""),
    message: L("label_reindex"),
    buttonNames: [L("label_reindex"), L("label_cancel")],
    cancel: 1
  });
  dialog.addEventListener("click", function (e) {
    if (e.index != e.source.cancel) {
      globals.reindex();
      alert(L("label_done"));
      globals.resetFullnodeUI();
    }
  });
  dialog.show();

}
