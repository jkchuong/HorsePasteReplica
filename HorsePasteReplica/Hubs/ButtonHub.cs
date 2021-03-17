using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace HorsePasteReplica.Hubs
{
    public class ButtonHub : Hub
    {
        public async Task ChangeButtonRed(string buttonId)
        {
            await Clients.All.SendAsync("ReceiveButtonRed", buttonId);
        }

        public async Task ChangeButtonBlue(string buttonId)
        {
            await Clients.All.SendAsync("ReceiveButtonBlue", buttonId);
        }

        public async Task ChangeButtonGreen(string buttonId)
        {
            await Clients.All.SendAsync("ReceiveButtonGreen", buttonId);
        }

        public async Task ChangeButtonBlack(string buttonId)
        {
            await Clients.All.SendAsync("ReceiveButtonBlack", buttonId);
        }

        public async Task ShowAllButtons()
        {
            await Clients.Caller.SendAsync("ReceiveShowAll");
        }
    }
}
