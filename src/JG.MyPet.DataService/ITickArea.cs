using JG.MyPet.Models;
using System;
using System.Collections.Generic;
namespace JG.MyPet.DataService
{
    public interface ITickArea
    {
        void Save(JG.MyPet.Models.TickPlace tickPlace);

        List<TickPlace> GetTickPlaces();
    }
}
