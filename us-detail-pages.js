
//Change parent breadcrum to a link to location home
  
$("#swap-link-bredcrum").attr('href', url + "/praxis" + locationUrl);


  //us details pages, swaps all the price and time for the machines. The variables are on each page.
  //swap us machines times prices
  $(".swap-us-time-ct").html(usTimeMachineCT);
  $(".swap-us-time-mrt").html(usTimeMachineMRT);
  $(".swap-us-time-offenes-mrt").html(usTimeMachineOffenesMRT);
  $(".swap-us-time-dvt").html(usTimeMachineDVT);

  //swap us machines times prices
  $(".swap-us-price-ct").html(usPriceMachineCT);
  $(".swap-us-price-mrt").html(usPriceMachineMRT);
  $(".swap-us-price-offenes-mrt").html(usPriceMachineOffenesMRT);
  $(".swap-us-price-dvt").html(usPriceMachineDVT);


  //hides or unhides a machine at a location depending on if it has it or not.
  if (locationMachineTeslaMrt == "false") {
    $("#location-machines-list-mrt").css('display', 'none');
  }
  if (locationMachineOffenesMrt == "false") {
    $("#location-machines-list-offenes-mrt").css('display', 'none');
  }
  if (locationMachineCT == "false") {
    $("#location-machines-list-ct").css('display', 'none');
  }
  if (locationMachineDVT == "false") {
    $("#location-machines-list-dvt").css('display', 'none');
  }


  //hides or unhides a machine if the untersuchungen is supported or not
  if (usSupportsMachineTeslaMrt == "false") {
    $("#us-detail-machine-CT").css('display', 'none');
  }
  if (usSupportsMachineOffenesMrt == "false") {
    $("#us-detail-machine-mrt").css('display', 'none');
  }
  if (usSupportsMachineCT == "false") {
    $("#us-detail-machine-offenes-mrt").css('display', 'none');
  }
  if (usSupportsMachineDVT == "false") {
    $("#us-detail-machine-dvt").css('display', 'none');
  }




