// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require activestorage
//= require turbolinks
//= require_tree .


$(document).ready(function(){
    // alert("Dokuments ir ielādējies");
    // console.log(">>> Hi!");
    // console.log(document);

    function printPlayer(player) {
      
        $("tbody").append(`  <tr>
        <td>${player.name}</td>
        <td>${player.number}</td>
        <td>${player.position}</td>
        <td>${player.club}</td>
        <td>${player.full_name}</td>
        <td><a href="/players/${player.id}">Show</a></td>
        <td><a href="/players/${player.id}/edit">Edit</a></td>
        <td><a data-confirm="Are you sure?" rel="nofollow" data-method="delete" href="/players/${player.id}">Destroy</a></td>
      </tr>`)

    }
    function renderPlayersTable() {
        setInterval(function() {
            $.ajax('/players/remote_players')   
            .done(function(players) {
                $("tbody tr").remove()
                players.map((item) => printPlayer(item))
    
               
                
                // players.map(function(item) {
                //     printPlayer(item)
                // })
                // // 1.
                // console.log(players)
                // $("body").append(players[0].name)
                // $("body").append(players[1].name)
            });
        }, 1000);
    }

    function hasPlayers() {
        if ($("#players-table").length == 0) {
            return false;
        } else {
            return true;
        }
    }

    if (hasPlayers()) {
        renderPlayersTable();
    }


});



// $(document).ready(function(){

// });


