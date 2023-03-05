var url = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';


$(document).ready(function () {
    $.get(url, function (data, status) {
            
        var responce = data;



    
        for (var i = 0; i < (responce.length); i++) {

            var tr = document.createElement("tr")
            tr.classList.add("data-row")
            var td_id = document.createElement("td")
            td_id.classList.add("column1")
            var td_fname = document.createElement("td")
            td_fname.classList.add("column2")
            var td_lname = document.createElement("td")
            td_lname.classList.add("column3")
            var td_email = document.createElement("td")
            td_email.classList.add("column4")
            var td_phonenumber = document.createElement("td")
            td_phonenumber.classList.add("column5")




            td_id.innerHTML = responce[i].id
            td_fname.innerHTML = responce[i].firstName
            td_lname.innerHTML = responce[i].lastName
            td_email.innerHTML = responce[i].email
            td_phonenumber.innerHTML = responce[i].phone


            tr.append(td_id, td_fname, td_lname, td_email, td_phonenumber)
            $("#table-data table tbody").append(tr)


        }
        $(".data-row").click(function () {


            $("#info-content div:first-child").html("<b>User selected:</b>" + $(this).find(".column2").html() + " " + $(this).find(".column3").html())
            $("#info-content div textarea").html(text($(this).find(".column1").html()))
            $("#address_disc").html("<b>Address:</b>" + address($(this).find(".column1").html()))
            $("#city").html("<b>City:</b>" + city($(this).find(".column1").html()))
            $("#state").html("<b>State:</b>" + state($(this).find(".column1").html()))
            $("#zip_code").html("<b>Zip:</b>" + zipcode($(this).find(".column1").html()))

            function text(res) {
                for (var i = 0; i < (responce.length); i++) {
                    if (res == responce[i].id) {
                        return responce[i].description
                    }
                }
            }
            function address(res) {
                for (var i = 0; i < (responce.length); i++) {
                    if (res == responce[i].id) {
                        return responce[i].address.streetAddress
                    }
                }
            }
            function city(res) {
                for (var i = 0; i < (responce.length); i++) {
                    if (res == responce[i].id) {
                        return responce[i].address.city
                    }
                }
            }
            function state(res) {
                for (var i = 0; i < (responce.length); i++) {
                    if (res == responce[i].id) {
                        return responce[i].address.state
                    }
                }
            }
            function zipcode(res) {
                for (var i = 0; i < (responce.length); i++) {
                    if (res == responce[i].id) {
                        return responce[i].address.zip
                    }
                }
            }
        });

        $(document).on("keyup", "#search-box", function () {
            var search_item = $(this).val()


            //search bar can work in firstname 
            $(".data-row").each(function () {
                if ($(this).find(".column2").html().toLowerCase().indexOf(search_item) === -1) {
                    $(this).hide();
                }else{
                    $(this).show();
                }
            })

        })
    });
    
      
})