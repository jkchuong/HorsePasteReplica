using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HorsePasteReplica.Methods
{
    public static class Converter
    {
        public static int StringToInt(string stringToConvert)
        {
            int convertedInt = 0;
            char[] charsToConvert = stringToConvert.ToCharArray();
            foreach (char letter in charsToConvert)
            {
                convertedInt += Convert.ToInt32(letter);
            }

            return convertedInt;
        }
    }
}
