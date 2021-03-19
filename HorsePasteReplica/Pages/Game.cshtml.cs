using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HorsePasteReplica.Pages
{
    public class GameModel : PageModel
    {

        private readonly ILogger<GameModel> _logger;

        public GameModel(ILogger<GameModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {

        }
    }
}
