//
//  ModelHolder.swift
//  AutoPosSyFAD
//
//  Created by Madara2hor on 31.01.2020.
//  Copyright © 2020 Madara2hor. All rights reserved.
//

import Foundation

struct ModelsHolder {
    static let instance = ModelsHolder()
    
    let webSocketData = WebSocketDataWorking()
}

struct ViewsHolder {
    static let instance = ViewsHolder()
    
    var separatorDataPage: SeparatorDataPage?
    var settingMenuPage: SettingsMenuPage?
}



 
