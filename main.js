$(document).ready(function()
{
    $("#CGbtn").click(function()
    {
        $("#mainFigure_gb").attr("src", "downloadplot_CG_gb")
        $("#downloadFigLink_gb").attr("href", "downloadplot_CG_gb")
        $("#downloadTableLink_gb").attr("href", "downloadtable_CG_gb")
        $("#mainFigure_pmt").attr("src", "downloadplot_CG_pmt")
        $("#downloadFigLink_pmt").attr("href", "downloadplot_CG_pmt")
        $("#downloadTableLink_pmt").attr("href", "downloadtable_CG_pmt")
        $("#mainFigure_exon").attr("src", "downloadplot_CG_exon")
        $("#downloadFigLink_exon").attr("href", "downloadplot_CG_exon")
        $("#downloadTableLink_exon").attr("href", "downloadtable_CG_exon")
        $("#mainFigure_intron").attr("src", "downloadplot_CG_intron")
        $("#downloadFigLink_intron").attr("href", "downloadplot_CG_intron")
        $("#downloadTableLink_intron").attr("href", "downloadtable_CG_intron")
        document.getElementById("bt0").style.backgroundColor='lightblue';
        document.getElementById("bt0").style.boxShadow='0 0 5px grey inset';
        document.getElementById("bt1").style.backgroundColor='transparent';
        document.getElementById("bt1").style.boxShadow='none';
        document.getElementById("bt2").style.backgroundColor='transparent';
        document.getElementById("bt2").style.boxShadow='none';
    });

    $("#CHGbtn").click(function()
    {
        $("#mainFigure_gb").attr("src", "downloadplot_CHG_gb")
        $("#downloadFigLink_gb").attr("href", "downloadplot_CHG_gb")
        $("#downloadTableLink_gb").attr("href", "downloadtable_CHG_gb")
        $("#mainFigure_pmt").attr("src", "downloadplot_CHG_pmt")
        $("#downloadFigLink_pmt").attr("href", "downloadplot_CHG_pmt")
        $("#downloadTableLink_pmt").attr("href", "downloadtable_CHG_pmt")
        $("#mainFigure_exon").attr("src", "downloadplot_CHG_exon")
        $("#downloadFigLink_exon").attr("href", "downloadplot_CHG_exon")
        $("#downloadTableLink_exon").attr("href", "downloadtable_CHG_exon")
        $("#mainFigure_intron").attr("src", "downloadplot_CHG_intron")
        $("#downloadFigLink_intron").attr("href", "downloadplot_CHG_intron")
        $("#downloadTableLink_intron").attr("href", "downloadtable_CHG_intron")
        document.getElementById("bt1").style.backgroundColor='lightblue';
        document.getElementById("bt1").style.boxShadow='0 0 5px grey inset';
        document.getElementById("bt0").style.backgroundColor='transparent';
        document.getElementById("bt0").style.boxShadow='none';
        document.getElementById("bt2").style.backgroundColor='transparent';
        document.getElementById("bt2").style.boxShadow='none';
    });
    
    $("#CHHbtn").click(function()
    {
        $("#mainFigure_gb").attr("src", "downloadplot_CHH_gb")
        $("#downloadFigLink_gb").attr("href", "downloadplot_CHH_gb")
        $("#downloadTableLink_gb").attr("href", "downloadtable_CHH_gb")
        $("#mainFigure_pmt").attr("src", "downloadplot_CHH_pmt")
        $("#downloadFigLink_pmt").attr("href", "downloadplot_CHH_pmt")
        $("#downloadTableLink_pmt").attr("href", "downloadtable_CHH_pmt")
        $("#mainFigure_exon").attr("src", "downloadplot_CHH_exon")
        $("#downloadFigLink_exon").attr("href", "downloadplot_CHH_exon")
        $("#downloadTableLink_exon").attr("href", "downloadtable_CHH_exon")
        $("#mainFigure_intron").attr("src", "downloadplot_CHH_intron")
        $("#downloadFigLink_intron").attr("href", "downloadplot_CHH_intron")
        $("#downloadTableLink_intron").attr("href", "downloadtable_CHH_intron")
        document.getElementById("bt2").style.backgroundColor='lightblue';
        document.getElementById("bt2").style.boxShadow='0 0 5px grey inset';
        document.getElementById("bt1").style.backgroundColor='transparent';
        document.getElementById("bt1").style.boxShadow='none';
        document.getElementById("bt0").style.backgroundColor='transparent';
        document.getElementById("bt0").style.boxShadow='none';
    });




    $("#sign").click(function()
    {
        var data = {
            "key": $("#Project_Name").val()
        }

        console.log(data["key"])
        

        $.ajax({
          url: 'sample_request',
          type: 'GET',
          data: data,
          success: function(returnList){
            alert("Successfully sign in "+"'" +data["key"]+"'!" +"\n"+"We will direct to 'correlation' in Single Methylome Analyses.")
            parent.window.location.assign("/scatter");//父頁面跳轉到


            $("#choose_sample").remove()

            $("#create_sample").append(
                '<select name="choose_sample" id="choose_sample"></select>'
            )

            for(i = 0; i < returnList.length; i++)
            {
                
                $("#choose_sample").append(
                    "<option value=" + returnList[i] + ">" + returnList[i] + "</option>"
                )
                
                console.log(returnList[i])
            }            
          },
          error: function()
          {
            alert("'" + data["key"] + "' not exist")
          }

        });        
    });


    if($("#sign").length == 0)
    {
        var data = {}
        //alert("1")
        $.ajax({
          url: 'sample_nonname_request',
          type: 'GET',
          data: data,
          success: function(returnList){

            //alert("2")//
            //console(returnList.length)
            $("#choose_sample").remove()

            $("#create_sample").append(
                '<select name="choose_sample" id="choose_sample"></select>'
            )
            //alert("ccc")
            //alert(returnList.length)
            for(i = 0; i < returnList.length; i++)
            {
                //alert(returnList[i])
                $("#choose_sample").append(
                    "<option value=" + returnList[i] + ">" + returnList[i] + "</option>"
                )
            }  

          },
          error: function()
          {
            alert("Please sign in the accounname")
          }

        });  
    }
    $("#humanCAF_example").click(function()
    {
        var text = "humanCAF_example";
         $( "#Project_Name" ).val( text );
        
    })
    /* the js script in meta.html is different from others
    $("#sign_meta").click(function()
    {
        var data = {
            "key": $("#Project_Name").val()
        }

        console.log(data["key"])
        //alert(data["key"])//

        $.ajax({
          url: 'sample_meta_request',
          type: 'GET',
          data: data,
          success: function(returnList){
            $("#choose_sample").remove()

            $("#create_sample").append(
                '<select name="choose_sample" id="choose_sample"></select>'
            )

            for(i = 0; i < returnList.length; i++)
            {
                
                $("#choose_sample").append(
                    "<option value=" + returnList[i] + ">" + returnList[i] + "</option>"
                )
                
                console.log(returnList[i])
            }            
          },
          error: function()
          {
            alert("'" + data["key"] + "' not exist")
          }

        });
        
    });
    */

    function AskUploadStatus()
    {
        $.ajax({
            url: "CheckUploadProgress",
            type: "GET",
            headers: {"sessionid": "m0grnpcaqfdp28af7zjr84mx0owfsvkg"},
            success: function(returnList)
            {
                console.log(returnList)
            }
        });
    }
    $("#homesubmit").click(function()
    {
        //for(var i = 0; i<1*60*60*24; i++)
        //{
        //    setTimeout(AskUploadStatus, i*1000);
        //}
    });


    var run = false;
    function AskRunState()
    {
        if(!run)
        {
            var data = {}


            var name = {
                "key": $("#Project_Name").val()
            }

            $.ajax({
                  url: 'CheckRun',
                  type: 'GET',
                  data: data,
                  success: function(returnList){
                        if(returnList["state"] == true)
                        {
                            console.log("Running");                        
                            if(run == false)
                            {
                                confirm("Your Project name is"+" "+ name["key"] +"\n"+"Please check if you receive the email"+"\n"+"You can close the tab directly, thanks.");
                                console.log("confirm");
                            }
                            run = true;
                        }     
                        else if(returnList["state"] == false)
                        {
                            run = false;
                            // 上傳中要做的
                            console.log("Uploading");
                        }
                  },
                  error: function()
                  {
                    console.log("error");
                  }

            });
            console.log("apple");
        }
        else
        {
            console.log("Preprocessing,");
        }        
    }

    $("#homesubmit").on('click', function()
    {              
        $.ajax({
            // Your server script to process the upload
            url: '',
            type: 'POST',

            // Form data
            data: new FormData($('#mainform')[0]),

            // Tell jQuery not to process data or worry about content-type
            // You *must* include these options!
            cache: false,
            contentType: false,
            processData: false,

            // Custom XMLHttpRequest
            xhr: function ()
            {
                var myXhr = $.ajaxSettings.xhr();
                if (myXhr.upload)
                {
                    // For handling the progress of the upload
                    myXhr.upload.addEventListener('progress', function (e)
                    {
                        if (e.lengthComputable)
                        {
                            $('#uploadprogress').attr({
                                "aria-valuenow": e.loaded,
                                "aria-valuemax": e.total,                                
                            });
                            $('#uploadprogress').text(Math.round((e.loaded / e.total) * 100) + "%");
                            $('#uploadprogress').css({
                                "width": (e.loaded / e.total) * 100 + "%",
                            });
                        }

                        if(e.loaded == e.total)
                        {
                            setTimeout(function(){alert("We receive your files!"+"\n"+"Please wait for the email. It will show if the preprocess begins, thank you.")}, 1000);                          
                        }
                    }, false);
                }
            return myXhr;
            }     
        });
    });   

    /*
    $("#cancel_upload").on('click', function(){
        $( '#mainform' ).fileupload( {
            dataType: 'json',
            add: function( e, data ) {
                var abortBtn = $( '<a/>' )
                .attr( 'href', 'javascript:void(0)' )
                .append( 'Abort' )
                .click( function() {
                    data.abort();
                    data.context.remove();
                } );

            data.context = $( '<div/>' )
                .appendTo( document.body );

            data.context.append( $( '<p/>' ) )
                .append( 'Uploading ' + data.files[0].name )
                .append( abortBtn );

            data.submit();
        },
        done: function( e, data ) {
        }
        }); 


    });

        var jqXHR = $('#mainform').fileupload('send', {files: filesList})
        .error(function (jqXHR, textStatus, errorThrown) {
            if (errorThrown === 'abort') {
                alert('File Upload has been canceled');
            }
        });
    $("#cancel_upload").click(function (e) {
        jqXHR.abort();
    });*/

});



