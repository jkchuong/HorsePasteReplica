using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace HorsePasteReplica.Hubs
{
    public class ButtonHub : Hub
    {
        public async Task ChangeButtonRed()
        {
            await Clients.All.SendAsync("ReceiveButtonRed");
        }

        public async Task ChangeButtonBlue()
        {
            await Clients.All.SendAsync("ReceiveButtonBlue");
        }

        public async Task ChangeButtonGreen()
        {
            await Clients.All.SendAsync("ReceiveButtonGreen");
        }
    }
}
