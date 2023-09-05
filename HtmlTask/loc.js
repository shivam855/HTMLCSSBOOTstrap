var stateList = [
    { Country: 'India', State: 'Maharashtra' },
    { Country: 'India', State: 'Delhi' },
    { Country: 'India', State: 'Punjab' },
    { Country: 'US', State: 'Albama' },
    { Country: 'US', State: 'Arizona' },
    { Country: 'US', State: 'California' }
  ];
  // list of city according to the state
  
  var cityList = [
    { State: 'Maharashtra', city: 'Pune' },
    { State: 'Maharashtra', city: 'Mumbai' },
    { State: 'Maharashtra', city: 'Hydrabad' },
    { State: 'Maharashtra', city: 'Firozabad' },
    { State: 'Delhi', city: 'New Delhi' },
    { State: 'Delhi', city: 'Balijt Vihar' },
    { State: 'Punjab', city: 'Ludhiyana' },
    { State: 'Punjab', city: 'Amritsar' },
    { State: 'Punjab', city: 'Patiyala' },
    { State: 'Punjab', city: 'Jalandhar' },
    { State: 'Albama', city: 'Abbeville' },
    { State: 'Albama', city: 'Adamsville' },
    { State: 'Arizona', city: 'Phoenix' },
    { State: 'Arizona', city: 'Tucson' },
    { State: 'California', city: 'Los Angeles' },
    { State: 'California', city: 'Vernon' }
  ];

  $(document).ready(function () {
    $("#country").change(function () {
    $("#State").html("<option value=''  selected> ---select--- </option>");
    $("#City").html("<option value=''  selected> ---select--- </option>");
    const states = stateList.filter(m => m.Country == $("#country").val());
    states.forEach(element => {
      let option = "<option value='" + element.State + "'>" + element.State + "</option>";
      $("#State").append(option);
    });
    });

  });