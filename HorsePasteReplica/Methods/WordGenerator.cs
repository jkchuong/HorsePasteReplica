using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;

namespace HorsePasteReplica.Methods
{
    public class WordGenerator
    {
        private string[] nounlist;
        private Random random;
        
        public WordGenerator(int seed)
        {
            nounlist = File.ReadAllLines("nounlist.txt");
            random = new Random(seed);
        }

        public string GetRandomWord()
        {
            string word = nounlist[random.Next(0, nounlist.Length)];
            return word.First().ToString().ToUpper() + word.Substring(1);
        }
    }
}
